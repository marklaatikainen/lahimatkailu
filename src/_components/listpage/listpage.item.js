import React, { Component } from 'react';
import { View, TouchableOpacity, Animated, Image } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import { targetActions } from '../../_actions';
import { targetIcon } from '../listpage';

export default class Item extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => this.props.dispatch(targetActions.openTarget(this.props.data))}>
                    <ListItem
                        avatar={
                            <Image source={
                                { uri: targetIcon(this.props.data.type) }
                            } style={{
                                width: 30,
                                height: 32
                            }} />
                        }
                        title={this.props.data.name}
                        subtitle={this.props.data.address.street + ", " + this.props.data.address.city}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

Item.propTypes = {
    data: PropTypes.object.isRequired
};