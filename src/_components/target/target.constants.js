import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { styles } from '../target';

export const PORTRAIT_LAYOUT = {flexArr: [1.5, 1.5, 0.5, 3, 1.5, 1.5, 0.5, 3], heightArr: [22, 22, 22, 22]};
export const LANDSCAPE_LAYOUT = {flexArr: [1.5, 1.5, 0.5, 3, 1.5, 1.5, 0.5, 3], heightArr: [22, 22, 22, 22]};


export const AccessibilityIcon = (props) => {
    return (
        <View style={styles.iconwrapper}>
            <Icon style={styles.icon} name={props.name} size={40}/>
            <Text numberOfLines={1} style={styles.icontext}>{props.text}</Text>
        </View>
    )
}
