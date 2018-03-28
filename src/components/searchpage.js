import React, {Component} from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    DeviceEventEmitter,
    Animated,
    Easing,
    UIManager,
    Linking,
    Dimensions,
    BackHandler
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import RNALocation from 'react-native-android-location';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getDistance} from 'geolib';
// style
import {styles} from './styles/searchpagestyle';

import SliderComponent from './slider';
import Item from './listItem';
import TargetInfo from './targetInfo';
import SearchBarComponent from './search';
import {fetchData} from './getData';

import ListFilter from './listFilter';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            initialData: [],
            selectedItem: '',
            item: [],
            textLength: 0,
            filterList: [],
            options: {
                food: true,
                sight: true,
                service: true
            },
            range: 500
        };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.androidBackHandler);
        this.fetchData().done();
        DeviceEventEmitter.addListener('updateLocation', function (e) {
            this.setState({
                lng: e.Longitude,
                lat: e.Latitude
            });
        }.bind(this));

        RNALocation.getLocation();
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.androidBackHandler);
    }

    fetchData = async() => {
        fetchData().then(res => {
            this.setState({data: res, initialData: res});
        });
    }

    showErrorMessage(error) {
        Snackbar.show({
            title: error,
            duration: Snackbar.LENGTH_INDEFINITE,
            action: {
                title: 'yritä uudelleen ',
                color: 'white',
                onPress: () => {
                    this.fetchData();
                }
            }
        });
    }

    precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

    setRange(l,r) {
        const {initialData, lat, lng} = this.state;
        let list = [];
        for (let i = 0; i < initialData.length; i++) {
            let range = this.precisionRound(getDistance({latitude: lat, longitude: lng}, {latitude: initialData[i].location.latitude, longitude: initialData[i].location.longitude}) / 1000, 1);
            if(range >= l && range <= r) {
                list.push(initialData[i]);
            }
        }
        this.setState({data: list})
    }

    componentDidUpdate() {
        this.fadeIntoTarget();
        this.filter();
    }

    setSelectedItem(item, id) {
        this.setState({selectedItem: id, item: item})
    }

    backToList() {
        this.setState({selectedItem: '', item: []});
    }

    androidBackHandler = () => {
        if (this.state.selectedItem !== '') {
            this.setState({selectedItem: ''})
            return true;
        }
    }

    filteredList = (newData) => {
        this.setState({data: newData})
    }

    checked(data) {
        this.setState({options: data});
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options !== this.state.options) {
            this.filter();
        }
    }

    //Checkbox filtteri
    filter(prevState) {
        let filterList = [];
        let origData = this.state.initialData.length;
        for (let i = 0; i < origData; i++) {
            if (this.state.options.food && this.state.initialData[i].type == "Ruoka") {
                filterList.push(this.state.initialData[i]);
            }
            if (this.state.options.sight && this.state.initialData[i].type == "Nähtävyys") {
                filterList.push(this.state.initialData[i]);
            }
            if (this.state.options.service && this.state.initialData[i].type == "Palvelu") {
                filterList.push(this.state.initialData[i]);
            }
        };
        if (origData > filterList.length || this.state.data !== this.state.initialData) {
            this.setState({data: filterList})
        }
    }

    render() {
        const {data, initialData, textLength} = this.state;

        if (this.state.selectedItem == '') {
            let renderdata = data !== []
                ? data
                : initialData;

            return (
                <View style={styles.container}>
                    {!!initialData
                        ? (
                            <View>
                                <SearchBarComponent
                                    textLength={(len) => this.setState({textLength: len})}
                                    filterList={initialData}
                                    addFilter={(data) => this.filteredList(data)}/>
                                <View style={styles.bar}>
                                    <ListFilter onChange={((e) => this.checked(e))}/>
                                    <SliderComponent range={(l,r) => this.setRange(l,r)}/>
                                </View>
                                {renderdata.length === 0 && textLength > 0
                                    ? (
                                        <Text style={styles.notfound}>Ei hakutuloksia..</Text>
                                    )
                                    : (
                                        <FlatList
                                            data={renderdata}
                                            keyExtractor={item => item._id}
                                            renderItem={({item, index}) => (<Item
                                            openItem={() => this.setSelectedItem(item, item._id)}
                                            data={item}
                                            index={index}/>)}/>
                                    )
}
                            </View>
                        )
                        : (<ActivityIndicator style={styles.loading} size="large" color="blue"/>)
}
                </View>
            )
        } else {
            // kohdesivu
            return (<TargetInfo data={this.state.item} backToList={() => this.backToList()}/>)
        }
    }
}