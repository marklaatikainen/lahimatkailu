import React, { Component } from 'react';
import { View, Dimensions, Text } from 'react-native'
import CheckBox from 'react-native-checkbox';

import getData from './getData';
import Panel from './panel'

import { styles } from './styles/listFilterStyle';

export default class ListFilter extends React.Component {

    state = {
        sight: true,
        food: true,
        service: true
    }

    changeCBState(cb) {
        if (cb == 'food') {
            this.setState({
                food: !this.state.food
            }, () => {
                this
                    .props
                    .onChange({food: this.state.food, sight: this.state.sight, service: this.state.service});
            })
        } else if (cb == 'sight') {
            this.setState({
                sight: !this.state.sight
            }, () => {
                this
                    .props
                    .onChange({food: this.state.food, sight: this.state.sight, service: this.state.service});
            })
        } else if (cb == 'service') {
            this.setState({
                service: !this.state.service
            }, () => {
                this
                    .props
                    .onChange({food: this.state.food, sight: this.state.sight, service: this.state.service});
            })
        }
    }

    render() {
        return (
            <View checked={this.state} style={styles.container}>
                <CheckBox
                    label="Ruoka"
                    checked={this.state.food}
                    onChange={() => this.changeCBState('food')}/>
                <CheckBox
                    label="Kohteet"
                    checked={this.state.sight}
                    onChange={() => this.changeCBState('sight')}/>
                <CheckBox
                    label="Palvelut"
                    checked={this.state.service}
                    onChange={() => this.changeCBState('service')}/>
            </View>
        );
    }
}