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

    setSelectedItem(item, id) {
        this.setState({ selectedItem: id, item: item })
    }

    backToList() {
        this.setState({ selectedItem: '', item: [] });
    }

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
                                                    openItem={() => this.setSelectedItem(item, item._id)}
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
                <TargetInfo data={this.state.item} backToList={() => this.backToList()} />
            )
        }
    }
}