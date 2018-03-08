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

export default class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            initialData: [],
            selectedItem: '',
            item: [],
            textLength: 0
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

    setSelectedItem(item, id) {
        this.setState({ selectedItem: id, item: item })
    }

    backToList() {
        this.setState({ selectedItem: '', item: [] });
    }

    filteredList = (newData) => {
        this.setState({ data: newData })
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