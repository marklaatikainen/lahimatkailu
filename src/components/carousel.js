import React, {Component} from 'react';
import {View, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import Carousel from 'react-native-looped-carousel-improved';

const { width, height } = Dimensions.get('window');

export default class CustomCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    const {images} = this.props;
    if (images && images.length) {
      return (
        <View style={styles.scrollContainer} onLayout={this._onLayoutDidChange}>
         <Carousel
          delay={4000}
          style={this.state.size}
          autoplay
          pageInfo
          pageInfoBackgroundColor="rgba(255, 255, 255, 0.55)"
          isLooped
        >
            {images.map(image => (<Image
              key={images.indexOf(image)}
              style={styles.image}
              source={{
              uri: image
            }}/>))}
          </Carousel>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  scrollContainer: {
    height: 200
  },
  image: {
    width: Dimensions
      .get('window')
      .width,
    height: 200
  }
});