import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles, AccessibilityIcon } from '../target';

export class IconBar extends Component {

    render() {
        return (
            <View style={styles.icons}>
                <AccessibilityIcon name="wheelchair" text="Esteetön" />                
                <AccessibilityIcon name="clock-o" text="24h" />                
                <AccessibilityIcon name="car" text="Pysäköinti" />                
                <AccessibilityIcon name="paw" text="Lemmikit sallittu" />                
            </View>
        )
    }
}