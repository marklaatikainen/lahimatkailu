import React, {Component} from 'react';
import {View} from 'react-native';
import CheckBoxes from './checkBoxComponent';
import MapViewComponent from './mapview';

export default class MainPage extends React.Component {

    state = {
        options: {
            food: true, 
            sight: true, 
            service: true
        }
    }

    checked(data) {
        this.setState({options: data});
    }

    render() {
        return (
            <View>
                <MapViewComponent options={this.state.options}/>
                <CheckBoxes onChange={(e) => this.checked(e)}/>
            </View>
        )
    }
}