import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    Dimensions,
    Text,
    TouchableOpacity,
    Animated,
    Easing,
    UIManager,
    Linking
} from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView, {Marker} from 'react-native-maps';
import CustomCarousel from './carousel';
import TableOpenHours from './tableOpenHours';

// style
import {styles} from './styles/targetinfostyle';

export default class TargetInfo extends Component {
    constructor(props) {
        super(props);

        this.opacityValue = new Animated.Value(0);
        this.opacityItem = new Animated.Value(0);
        this.scaleValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.fadeIntoTarget();
    }

    openMap = (lat, lng) => {
        Linking
            .openURL('http://maps.google.com/maps?daddr=' + lat + ',' + lng)
            .catch(err => console.error('An error occurred', err));;
    };

    fadeIntoTarget() {
        this
            .scaleValue
            .setValue(0)
        this
            .opacityValue
            .setValue(0)
        Animated.parallel([
            Animated.timing(this.scaleValue, {
                toValue: 1,
                duration: 300
            }),
            Animated.timing(this.opacityValue, {
                toValue: 1,
                duration: 300
            })
        ]).start()
    }

    fadeOut() {
        Animated
            .timing(this.opacityValue, {
            toValue: 0,
            duration: 200
        })
            .start(() => {
                this
                    .props
                    .backToList()
            })
    }

    render() {
        const scaleIt = this
            .scaleValue
            .interpolate({
                inputRange: [
                    0, 1
                ],
                outputRange: [0.94, 1]
            })

        return (
            <Animated.View
                style={[
                styles.container, {
                    opacity: this.opacityValue
                }, {
                    transform: [
                        {
                            scale: scaleIt
                        }
                    ]
                }
            ]}>
                <View style={styles.topBar}>
                    <TouchableOpacity style={styles.backIcon} onPress={() => this.fadeOut()}>
                        <Icon name='arrow-left' size={20} color='white'/>
                    </TouchableOpacity>
                    <Text style={styles.topBarText}>Kohteen tiedot</Text>
                    <TouchableOpacity
                        style={styles.openmap}
                        onPress={() => this.openMap(this.props.data.location.latitude, this.data.item.location.longitude)}>
                        <Icon name="dot-circle-o" color="white" size={20}/>
                    </TouchableOpacity>
                </View>
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
                        <TableOpenHours data={this.props.data.openingHours} style={styles}/>
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
            </Animated.View>
        )
    }
}

TargetInfo.propTypes = {
    data: PropTypes.object.isRequired
};