import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Image } from 'react-native';
import Carousel from 'react-native-looped-carousel-improved';

import { styles, onLayoutDidChange } from '../target';

export class CustomCarousel extends Component {
  render() {
    const { picture } = this.props.target;
    const { dimensions } = this.props;

    if (picture && picture.length) {
      return (
        <View style={ styles.scrollContainer } onLayout={ onLayoutDidChange }>
            <Carousel
                delay={4000}
                style={ styles.dimensions }
                autoplay
                pageInfo
                pageInfoBackgroundColor="rgba(255, 255, 255, 0.55)"
                isLooped>
            { picture.map(image => (
              <Image 
                key={picture.indexOf(image)} 
                style={[styles.image, {width: dimensions.screenWidth }]} 
                source={{ uri: image }}
              />
            ))
            }
          </Carousel>
        </View>
      );
    } else {
        return ( null );
    }
  }
}

CustomCarousel.propTypes = {
  target: PropTypes.object.isRequired,
  dimensions: PropTypes.object.isRequired
}