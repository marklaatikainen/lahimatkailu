import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker} from 'react-native-maps';
import CustomCarousel from './carousel';
import TableOpenHours from './tableOpenHours'

export default class TargetInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ScrollView style={styles.container}>
                <CustomCarousel images={this.props.data.picture}/>
                <View style={styles.textarea}>
                    <View style={styles.icons}>
                        <View style={styles.iconwrapper}>
                            <Icon style={styles.icon} name="wheelchair" size={40}/>
                            <Text numberOfLines={1} style={styles.icontext}>Esteetön</Text>
                        </View>
                        <View style={styles.iconwrapper}>
                            <Icon style={styles.icon} name="clock-o" size={40}/>
                            <Text style={styles.icontext}>24h</Text>
                        </View>
                        <View style={styles.iconwrapper}>
                            <Icon style={styles.icon} name="car" size={40}/>
                            <Text style={styles.icontext}>Pysäköinti</Text>
                        </View>
                        <View style={styles.iconwrapper}>
                            <Icon style={styles.icon} name="paw" size={40}/>
                            <Text style={styles.icontext}>Lemmikit sallittu</Text>
                        </View>
                    </View>
                    <Text style={styles.name}>{this.props.data.name}</Text>
                    <Text style={styles.subtitle}>{this.props.data.type}</Text>
                    <Text style={styles.description}>{this.props.data.info}</Text>
                    <TableOpenHours data={this.props.data.openingHours} style={styles} />
                </View>
                <MapView
                    style={styles.map}
                    scrollEnabled={false}
                    zoomEnabled={false}
                    pitchEnabled={false}
                    rotateEnabled={false}
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
                    }}/>
                </MapView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        elevation: 5,
        marginBottom: 0,
        width: Dimensions
            .get('window')
            .width,
        height: 100
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        marginLeft: 25,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 10,
        marginLeft: 25,
        color: 'green',
    },
    description: {
        marginTop: 15,
        marginLeft: 25,
        marginRight: 30,
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        width: '100%',
        fontWeight: 'bold',
        marginTop: 10,
        textAlign: 'center',
        marginLeft: 10,
    },
    openingTitle: {
        marginLeft: 25
    },
    opening: {
        marginLeft: 25,
        marginBottom: 10
    },
    icons: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        backgroundColor: '#74A335',
        height: 60,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 30,
        paddingRight: 30,
        width: '100%',
        elevation: 3
    },
    iconwrapper: {
        width: 57
    },
    icon: {
        fontSize: 21,
        color: '#EAF1DB',
        textAlign: 'center',
        elevation: 7
    },
    icontext: {
        color: '#EAF1DB',
        fontSize: 10,
        textAlign: 'center',
    },
    textarea: {
        backgroundColor: '#fff',
    }
});