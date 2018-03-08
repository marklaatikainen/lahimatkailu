import React, { Component } from 'react';
import { View } from 'react-native';
import CheckBoxes from './checkBoxComponent';
import MapViewComponent from './mapview';
import TargetInfo from './targetInfo';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: [],
            options: {
                food: true,
                sight: true,
                service: true
            },
            selectedItem: '',
        }
    }


    checked(data) {
        this.setState({ options: data });
    }

    backToList() {
        this.setState({ selectedItem: '', item: [] });
    }

    setSelectedItem(item, id) {
        this.setState({ selectedItem: id, item: item })
    }

    render() {
        const { item, selectedItem } = this.state;
        if (selectedItem === '') {
            return (
                <View>
                    <MapViewComponent options={this.state.options} setSelectedItem={(item, id) => this.setSelectedItem(item, id)}  />
                    <CheckBoxes onChange={(e) => this.checked(e)} />
                </View>
            )
        } else {
            return <TargetInfo data={item} backToList={() => this.backToList()} />
        }
    }
     
}