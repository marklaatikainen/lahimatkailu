import React, { Component } from 'react';
import {
    View,
    FlatList,
    ActivityIndicator,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    LayoutAnimation,
    UIManager,
    Linking,
    Dimensions
} from 'react-native';
import Item from './listItem';
import TargetInfo from './targetInfo';
import SearchBarComponent from './search';
import getData from './getData';
import Icon from 'react-native-vector-icons/FontAwesome';
// style
import { styles } from './styles/searchpagestyle';

import ListFilter from './listFilter';

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.opacityValue = new Animated.Value(0);
        this.opacityItem = new Animated.Value(0);
        this.scaleValue = new Animated.Value(0);

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
        this.fetchData();
    }

    fetchData = async () => {
        getData.fetchData().then(res => {
            this.setState({ data: res, initialData: res });
        });
    }

    componentDidUpdate() {
        this.fadeIntoTarget();
        this.filter();
    }

    function(item, id) {
        this.setState({ selectedItem: id, item: item })
    }

    // Animaatiot
    fadeIntoTarget() {
        this
            .scaleValue
            .setValue(0)
        this
            .opacityValue
            .setValue(0)
        Animated.parallel([
            Animated.timing(this.scaleValue, {
                toValue: 1,
                duration: 300
            }),
            Animated.timing(this.opacityValue, {
                toValue: 1,
                duration: 300
            })
        ]).start()
    }

    backToList() {
        Animated
            .timing(this.opacityValue, {
                toValue: 0,
                duration: 200
            })
            .start(() => this.setState({ selectedItem: '', item: [] }))
    }

    openMap = (lat, lng) => {
        Linking
            .openURL('http://maps.google.com/maps?daddr=' + lat + ',' + lng)
            .catch(err => console.error('An error occurred', err));;
    };

    filteredList = (newData) => {
        this.setState({ data: newData })
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
        const scaleIt = this
            .scaleValue
            .interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: [0.94, 1]
            })

        if (this.state.selectedItem == '') {
            let renderdata = this.state.data !== []
                ? this.state.data
                : this.state.initialData;

            return (
                <View style={styles.container}>
                    {this.state.initialData.length > 0
                        ? (
                            <View>
                                <ListFilter onChange={( (e) => this.checked(e))}/>
                                {/* <CheckBoxes onChange={( (e) => this.checked(e))}/> */}
                                <SearchBarComponent
                                    textLength={(len) => this.setState({ textLength: len })}
                                    filterList={this.state.initialData}
                                    addFilter={(data) => this.filteredList(data)} />
                                {
                                    renderdata.length === 0 && this.state.textLength > 0
                                        ? (
                                            <Text style={styles.notfound}>Ei hakutuloksia..</Text>
                                        )
                                        : (
                                            <FlatList
                                                data={renderdata}
                                                keyExtractor={item => item._id}
                                                renderItem={({ item, index }) => (<Item
                                                    openItem={() => this.function(item, item._id)}
                                                    data={item}
                                                    index={index} />)} />
                                        )
                                }
                                
                            </View>
                        )
                        : (<ActivityIndicator style={styles.loading} size="large" color="blue" />)
                    }
                </View>
            )
        } else {
            // kohdesivu
            return (

                <Animated.View
                    style={[
                        styles.container, {
                            opacity: this.opacityValue
                        }, {
                            transform: [
                                {
                                    scale: scaleIt
                                }
                            ]
                        }
                    ]}>
                    <View style={styles.topBar}>
                        <TouchableOpacity style={styles.icon} onPress={() => this.backToList()}>
                            <Icon name='arrow-left' size={20} color='white' />
                        </TouchableOpacity>
                        <Text style={styles.topBarText}>Kohteen tiedot</Text>
                        <TouchableOpacity
                            style={styles.openmap}
                            onPress={() => this.openMap(this.state.item.location.latitude, this.state.item.location.longitude)}>
                            <Icon name="dot-circle-o" color="white" size={20} />
                        </TouchableOpacity>
                    </View>
                    <TargetInfo data={this.state.item} />
                </Animated.View>
            )
        }
    }
}