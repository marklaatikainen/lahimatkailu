import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Animated
} from 'react-native'; //Step 1

class Panel extends Component {
    constructor(props) {
        super(props);

        this.icons = {
            'up': require('../../images/up-arrow.png'),
            'down': require('../../images/ic_filter_list_black_24dp.png')
        };

        this.state = {
            expanded: false,
            animation: new Animated.Value(25) // this value should be the same as the buttonImage height
        };
    }

    toggle() {
        let initialValue = this.state.expanded
            ? this.state.maxHeight + this.state.minHeight
            : this.state.minHeight;
        let finalValue = this.state.expanded
            ? this.state.minHeight
            : this.state.maxHeight + this.state.minHeight;

        this.setState({
            expanded: !this.state.expanded
        });

        this
            .state
            .animation
            .setValue(initialValue);
        Animated
            .spring(this.state.animation, {
            toValue: finalValue,
            speed: 18
        })
            .start();
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
            <Animated.View
                style={[
                styles.container, {
                    height: this.state.animation
                }
            ]}>
                <View
                    style={styles.iconContainer}
                    onLayout={this
                    ._setMinHeight
                    .bind(this)}>

                    <TouchableHighlight
                        style={styles.button}
                        onPress={this
                        .toggle
                        .bind(this)}
                        underlayColor="#f1f1f1">
                        <Image style={styles.buttonImage} source={icon} width={30} height={25}></Image>
                    </TouchableHighlight>
                </View>

                <View
                    style={styles.body}
                    onLayout={this
                    ._setMaxHeight
                    .bind(this)}>
                    {this.props.children}
                </View>

            </Animated.View>
        );
    }
}
export default Panel;

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        marginTop: 10,
        overflow: 'hidden'
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    button: {
        marginRight: 10
    },
    body: {
        alignItems: 'flex-end',
        paddingTop: 10
    }
});