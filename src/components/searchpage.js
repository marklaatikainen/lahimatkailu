import React, {Component} from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    UIManager,
    Linking,
    Dimensions,
    BackHandler
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import Icon from 'react-native-vector-icons/FontAwesome';
// style
import {styles} from './styles/searchpagestyle';

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
            }
        };
    }

    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.androidBackHandler);
        this
            .fetchData()
            .done();
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
        this.setState({
            options: data
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options !== this.state.options){
            this.filter();
        }
    }

    //Checkbox filtteri
    filter(prevState) {
        let filterList = [];
        let origData = this.state.initialData.length;
        for(let i=0; i < origData; i++) {
            if(this.state.options.food && this.state.initialData[i].type == "Ruoka") {
                filterList.push(this.state.initialData[i]);
            }
            if(this.state.options.sight && this.state.initialData[i].type == "Nähtävyys") {
                filterList.push(this.state.initialData[i]);
            }
            if(this.state.options.service && this.state.initialData[i].type == "Palvelu") {
                filterList.push(this.state.initialData[i]);
            }
        };
        if(origData > filterList.length || this.state.data !== this.state.initialData) {
            this.setState({
                data: filterList
            })
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
                                <ListFilter onChange={( (e) => this.checked(e))}/>
                                {/* <CheckBoxes onChange={( (e) => this.checked(e))}/> */}
                                <SearchBarComponent
                                    textLength={(len) => this.setState({textLength: len})}
                                    filterList={initialData}
                                    addFilter={(data) => this.filteredList(data)} />
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