import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

// style
import {styles} from './styles/settingspagestyle';

export default class SettingsPage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Asetukset</Text>
            </View>
        );
    }
}