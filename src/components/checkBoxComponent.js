import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native'
import CheckBox from 'react-native-checkbox';
import Panel from './panel'

export default class CheckBoxes extends React.Component {
    state = {
        food: true,
        sight: true,
        service: true
    }

    changeCBState(cb) {
        if (cb == 'food') {
            this.setState({
                food: !this.state.food
            }, () => {
                this.props.onChange({food: this.state.food, sight: this.state.sight, service: this.state.service});
            })
        } else if (cb == 'sight') {
            this.setState({
                sight: !this.state.sight
            }, () => {
                this.props.onChange({food: this.state.food, sight: this.state.sight, service: this.state.service});
            })
        } else if (cb == 'service') {
            this.setState({
                service: !this.state.service
            }, () => {
                this.props.onChange({food: this.state.food, sight: this.state.sight, service: this.state.service});
            })
        }
        
    }

    render() {
        return (
            <Panel>
                <View checked={this.state} style={styles.container}>
               
                    <CheckBox labelStyle={styles.label}
                        labelBefore
                        label="Ruoka"
                        checked={this.state.food}
                        onChange={() => this.changeCBState('food')}/>
                    <CheckBox labelStyle={styles.label}
                        labelBefore
                        label="Kohteet"
                        checked={this.state.sight}
                        onChange={() => this.changeCBState('sight')}/>
                    <CheckBox labelStyle={styles.label}
                        labelBefore
                        label="Palvelut"
                        checked={this.state.service}
                        onChange={() => this.changeCBState('service')}/>
               
                </View>
            </Panel>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        top: 0,
        height: 130,
        width: 110,
        paddingTop: 7,
        paddingBottom: 7,
        paddingRight: 10,
        backgroundColor: 'white',
        opacity: 0.75,
        borderRadius: 5,
        elevation: 3,
    },
    label: {
        opacity: 1,
        color: 'black',
       
    },
});