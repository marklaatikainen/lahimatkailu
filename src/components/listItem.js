import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    Image
} from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

export default class Item extends Component {
    constructor(props) {
        super(props);

        this.itemOpacity = new Animated.Value(0)
    }

    calculateFadeInDuration() {
        const index = this.props.index ++;
        
        if (index <= 10) {
            return (15  + (index * 35));
        } else {
            return (index * 5);
        }
    }

    fadeInItem() {
        Animated.timing(
            this.itemOpacity,
            {
                toValue: 1,
                duration: this.calculateFadeInDuration()
            }
        ).start();
    }

    componentDidUpdate() {
        this.fadeInItem();
    }

    targetIcon(type) {
        if (type === 'Ruoka') {
            return 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png'
          } else if (type === 'Nähtävyys') {
            return 'http://maps.gstatic.com/mapfiles/ms2/micons/tree.png'
          } else if (type === 'Palvelu') {
            return 'http://maps.gstatic.com/mapfiles/ms2/micons/realestate.png'
          }      
    }

    render() {
        return (
            <Animated.View style={{opacity: 1}}>
                <TouchableOpacity onPress={() => this.props.openItem(this.props.data._id)}>
                    <ListItem
                        avatar={
                            <Image source={
                                { uri: this.targetIcon(this.props.data.type) }
                            } style={{
                                width: 30,
                                height: 32
                            }} />
                        }
                        title={this.props.data.name}
                        subtitle={this.props.data.address.street + ", " + this.props.data.address.city}
                    />
                </TouchableOpacity>
            </Animated.View>
        )
    }
}

Item.propTypes = {
    data: PropTypes.object.isRequired
};