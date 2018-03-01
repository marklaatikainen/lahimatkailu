import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import NavigatorComponent from './components/navigationComponent';

export default class App extends Component {

  render() {
        return (
          <View style={styles.container}>
            <NavigatorComponent />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});