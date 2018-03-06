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

// style
import { styles } from './styles/targetinfostyle';

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
                    <Text style={styles.openingTitle}>Aukioloajat</Text>
                    <Text style={styles.opening}>
                        ma - pe: {"\t\t" + this.props.data.openingHours.mon.start + ' - ' + this.props.data.openingHours.mon.end + "\n"}
                        la: {"\t\t\t\t\t\t\t" + this.props.data.openingHours.sat.start + ' - ' + this.props.data.openingHours.sat.end + "\n"}
                        su: {"\t\t\t\t\t\t" + this.props.data.openingHours.sun.start + ' - ' + this.props.data.openingHours.sun.end}
                    </Text>
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