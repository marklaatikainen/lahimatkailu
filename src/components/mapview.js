import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  AppRegistry,
  DeviceEventEmitter,
  Image
} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import getData from './getData';
import RNALocation from 'react-native-android-location';

export default class MapViewComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      markers: [],
      lat: 60.169856,
      lng: 24.938379,
      options: {
        food: true,
        sight: true,
        service: true
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setProps(nextProps);
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
      this.setState({markers: itemList});
    })
  }

  getData() {
    this.fetchData();
  }

  componentDidMount() {
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

  fetchData = async() => {
    const res = await getData.fetchData();
    this.setState({data: res, markers: res});
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

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          scrollEnabled={true}
          zoomEnabled={true}
          minZoomLevel={5}
          maxZoomLevel={18}
          pitchEnabled={true}
          loadingEnabled={true}
          showsMyLocationButton={false}
          showsUserLocation={true}
          rotateEnabled={true}
          initialRegion={{
          latitude: this.state.lat,
          longitude: this.state.lng,
          latitudeDelta: 0.22,
          longitudeDelta: 0.22
        }}>
          {this
            .state
            .markers
            .map(marker => (
              <View key={marker._id}>
                <MapView.Marker
                  coordinate={{
                  longitude: marker.location.longitude,
                  latitude: marker.location.latitude
                }}
                  title={marker.name}
                  description={marker.type}>
                  <View>
                    <Image
                      style={{
                      width: 24,
                      height: 24
                    }}
                      source={{
                      uri: this.markerImgUrl(marker.type)
                    }}/>
                  </View>
                </MapView.Marker>
              </View>
            ))}
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    height: Dimensions
      .get('screen')
      .height - 46,
    width: Dimensions
      .get('screen')
      .width,
    alignItems: 'center',
    paddingTop: 0,
  }
});