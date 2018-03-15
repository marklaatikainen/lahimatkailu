import React, { Component } from 'react';
import {
  View,
  AppRegistry,
  DeviceEventEmitter,
  Image,
  Text,
  TouchableWithoutFeedback,
  Dimensions
} from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import ClusteredMapView from 'react-native-maps-super-cluster'
import { getDistance } from 'geolib';
import Orientation from 'react-native-orientation'
import { fetchData, fetchDataByLocation } from './getData';
import RNALocation from 'react-native-android-location';

// style
import { styles } from './styles/mapviewstyle';
import { customMapStyle } from './styles/mapviewstyle';

const INIT_REGION = {
  latitude: 60.169856,
  longitude: 24.938379,
  latitudeDelta: 0.22,
  longitudeDelta: 0.22
}

export default class MapViewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 60.169856,
      longitude: 24.938379,
      data: [],
      markers: [],
      options: {
        food: true,
        sight: true,
        service: true
      },
      region: this.setInitialRegion(),
      width: Dimensions.get('screen').width
    };
  }

  componentDidMount() {
    Orientation.addOrientationListener(this._orientationDidChange);
    this.getData(() => {
      this.setProps(this.props);
    }, () => {
      DeviceEventEmitter
        .addListener('updateLocation', function (e) {
          this.setState({
            lng: e.Longitude,
            lat: e.Latitude
          }, () => {
            this.setProps(this.props);
          });
        }.bind(this));

      RNALocation.getLocation();
    });
  }

  
  componentWillReceiveProps(nextProps) {
    this.setProps(nextProps);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this._orientationDidChange)
  }

  _orientationDidChange = (orientation) => {
    this.setState({ width: Dimensions.get('screen').width });
  }

  precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  setInitialRegion() {
    if (this.props.region != null) {
      return this.props.region;
    } else {
      return INIT_REGION;
    }
  }

  setProps(nextProps) {
    this.setState({
      options: {
        food: nextProps.options.food,
        sight: nextProps.options.sight,
        service: nextProps.options.service
      }
    }, () => {
      let itemList = [];
      for (let i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].type == 'Ruoka' && this.state.options.food) {
          itemList.push(this.state.data[i]);
        }
        if (this.state.data[i].type == 'Nähtävyys' && this.state.options.sight) {
          itemList.push(this.state.data[i]);
        }
        if (this.state.data[i].type == 'Palvelu' && this.state.options.service) {
          itemList.push(this.state.data[i]);
        }
        if (this.state.options.food === null && this.state.options.sight === null && this.state.options.service === null) {
          itemList = this.state.data;
        }
      };
      this.setState({ markers: itemList });
    })
  }

  getData() {
    this.fetchData();
  }

  fetchData = async () => {
    const res = await fetchDataByLocation(this.state.region);
    this.setState({ data: res, markers: res });
  };

  markerImgUrl(icon) {
    if (icon == 'Ruoka') {
      return 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png'
    } else if (icon == 'Nähtävyys') {
      return 'http://maps.gstatic.com/mapfiles/ms2/micons/tree.png'
    } else {
      return 'http://maps.gstatic.com/mapfiles/ms2/micons/realestate.png'
    }
  }

  renderCluster = (cluster, onPress) => {
    const pointCount = cluster.pointCount,
      coordinate = cluster.coordinate,
      clusterId = cluster.clusterId

    const clusteringEngine = this
      .map
      .getClusteringEngine(),
      clusteredPoints = clusteringEngine.getLeaves(clusterId, 100)

    return (
      <Marker coordinate={coordinate} onPress={(onPress)}>
        <View style={styles.myClusterStyle}>
          <Text style={styles.myClusterTextStyle}>
            {pointCount}
          </Text>
        </View>
      </Marker>
    )
  }

  renderMarker = (data) => <Marker
    key={data.name}
    coordinate={{
      latitude: data.location.latitude,
      longitude: data.location.longitude
    }}
    title={data.name}
    description={"Etäisyys linnuntietä: " + this.precisionRound(getDistance({ latitude: this.state.latitude, longitude: this.state.longitude }, { latitude: data.location.latitude, longitude: data.location.longitude }) / 1000, 1) + "km"}
    onCalloutPress={() => this.handleCalloutPress(data)}
  >
    <View style={{
      borderRadius: 32,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
      padding: 3
    }}>
      <Image
        style={{
          width: 32,
          height: 32
        }}
        source={{
          uri: this.markerImgUrl(data.type)
        }} />
    </View>
  </Marker>

  onRegionChange(region) {
    this.setState({ region }, () => this.fetchData());
  }

  handleCalloutPress(data) {
    this.props.setSelectedItem(data, data._id, this.state.region);
  }

  render() {
    return (
      <View style={styles.container}>
        <ClusteredMapView
          customMapStyle={customMapStyle}
          style={ [styles.map] }
          width={this.state.width}
          data={this.state.markers}
          initialRegion={this.state.region}
          onRegionChangeComplete={region => this.onRegionChange(region)}
          ref={(r) => {
            this.map = r
          }}
          renderMarker={this.renderMarker}
          renderCluster={this.renderCluster}
          showsMyLocationButton={false}
          showsUserLocation={true}
          minZoom={5}
          maxZoom={12}
          showInfoWindow={true} />
      </View>
    );
  }
}