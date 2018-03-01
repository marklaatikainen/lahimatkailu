import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TargetLocation extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    pitchEnabled={true}
                    rotateEnabled={true}
                    initialRegion={{
                    latitude: this.props.data.location.latitude,
                    longitude: this.props.data.location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}>
                    <MapView.Marker
                        coordinate={{
                        latitude: this.props.data.location.latitude,
                        longitude: this.props.data.location.longitude
                    }}
                        title={this.props.data.name}
                        description={this.props.data.type}/>
                </MapView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        marginTop: 10,
        alignSelf: 'center',
        width: Dimensions
            .get('window')
            .width,
        height: Dimensions
            .get('window')
            .height - 140
    }
});