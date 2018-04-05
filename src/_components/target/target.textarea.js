import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import TableOpenHoursContainer from './target.openhours.container';
import { styles, IconBar} from '../target';

export class TargetTextArea extends Component {

    render() {
        const { data } = this.props;

        return (
            <View style={styles.textarea}>
                <IconBar />
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.subtitle}>{data.type}</Text>
                <Text style={styles.description}>{data.info}</Text>
                <TableOpenHoursContainer/>
            </View>
        )
    }
}


TargetTextArea.propTypes = {
    data: PropTypes.object.isRequired
};