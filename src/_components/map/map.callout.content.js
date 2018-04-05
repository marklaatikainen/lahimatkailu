import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { getDistance } from 'geolib';

import { openingHours } from '../map';
import { precisionRound } from '../../_helpers';

export class CalloutContent extends Component {
    render() {
        const { data } = this.props;
        const { location } = this.props.userlocation;
        return (
            <View>
                <Text>{data.name}</Text>
                <Text>{data.type}</Text>
                <Text>Etäisyys linnuntietä: {precisionRound(getDistance({
                        latitude: location.Latitude,
                        longitude: location.Longitude
                    }, {
                        latitude: data.location.latitude,
                        longitude: data.location.longitude
                    }) / 1000, 1)}
                    km</Text>
                <Text>{openingHours(data)}</Text>
            </View>
        )
    }
}

CalloutContent.propTypes = {
    data: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
}