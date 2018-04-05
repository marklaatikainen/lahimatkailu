import React, { Component } from 'react'
import { TouchableHighlight, View, Animated, Image } from 'react-native';

import { styles } from '../panel';

export default class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('../../../images/up-arrow.png'),
            'down': require('../../../images/ic_filter_list_black_24dp.png')
        };

        this.state = {
            expanded: false,
            animation: new Animated.Value(25)
        };
    }

    toggle() {
        const { maxHeight, minHeight, expanded } = this.state;

        let initialValue = expanded
            ? maxHeight + minHeight
            : minHeight;
        let finalValue = expanded
            ? minHeight
            : maxHeight + minHeight;

        this.setState({
            expanded: !expanded
        });

        this.state.animation.setValue(initialValue);
        Animated.spring(this.state.animation, {
            toValue: finalValue,
            speed: 18
        }).start();
    }

    _setMaxHeight(event) {
        this.setState({maxHeight: event.nativeEvent.layout.height})
    }

    _setMinHeight(event) {
        this.setState({minHeight: event.nativeEvent.layout.height})
    }

    render() {
        let icon = this.icons['down'];

        if (this.state.expanded) {
            icon = this.icons['up'];
        }

        return (
            <Animated.View style={[styles.container, {height: this.state.animation}]}>
                <View
                    style={styles.iconContainer}
                    onLayout={this._setMinHeight.bind(this)}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={this.toggle.bind(this)}
                        underlayColor="#f1f1f1">
                        <Image style={styles.buttonImage} source={icon} width={30} height={25} />
                    </TouchableHighlight>
                </View>
                <View
                    style={styles.body}
                    onLayout={this._setMaxHeight.bind(this)}>
                    {this.props.children}
                </View>
            </Animated.View>
        );
    }
}