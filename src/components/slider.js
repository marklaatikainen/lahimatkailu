import React, {Component} from 'react'
import {View, Text, StyleSheet, Slider} from 'react-native';
import MultiSlider from 'react-native-MultiSlider';

export default class SliderComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            leftValue: 0,
            rightValue: 1
        };
    }

    precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }

    map(num, in_min, in_max, out_min, out_max) {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    changeLeft(value) {
        const { leftValue, rightValue } = this.state;
        this.setState({
            leftValue: value
        }, () => {
            const left = this.precisionRound(this.map(leftValue, 0, 1, 0, 100), 0);
            const right = this.precisionRound(this.map(rightValue, 0, 1, 0, 100), 0);
            this.props.range(left, right);
        })
    }

    changeRight(value) {
        const { leftValue, rightValue } = this.state;
        this.setState({
            rightValue: value
        }, () => {
            const left = this.precisionRound(this.map(leftValue, 0, 1, 0, 100), 0);
            const right = this.precisionRound(this.map(rightValue, 0, 1, 0, 100), 0);
            this.props.range(left, right);
        })
    }

    render() {
        const {value, leftValue, rightValue} = this.state;
        return (
            <View style={styles.container}>
                <MultiSlider
                    trackWidth={300}
                    trackStyle={{marginTop: 10, height: 10}}
                    rangeStyle={{marginTop: 10, height: 10}}
                    defaultTrackColor={'#999999'}
                    leftThumbColor={'#f0f0f0'}
                    rightThumbColor={'#f0f0f0'}
                    rangeColor={'#74A335'}
                    leftValue={this.state.leftValue}
                    rightValue={this.state.rightValue}
                    onLeftValueChange=
                    {(leftValue) => this.changeLeft(leftValue)}
                    onRightValueChange=
                    {(rightValue) => this.changeRight(rightValue)}/>

                <Text style={styles.text}>Etäisyys: {this.precisionRound(this.map(leftValue, 0, 1, 0, 100), 0)} - {this.precisionRound(this.map(rightValue, 0, 1, 0, 100), 0)}km</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '95%',
        marginLeft: '2%',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        textAlign: 'center'
    }
});