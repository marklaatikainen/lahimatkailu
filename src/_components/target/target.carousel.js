import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import Carousel from 'react-native-looped-carousel-improved';
import ImageLoad from 'react-native-image-placeholder';

import { styles } from '../target';
import notFoundImage from '../../../images/kohteesta_ei_kuvia.png';

export class CustomCarousel extends Component {
  render() {
    const { picture } = this.props.target;
    const { dimensions } = this.props;

    if (picture && picture.length) {
      return (
        <View style={styles.scrollContainer}>
          <Carousel
            delay={4000}
            style={[styles.image, { width: dimensions.screenWidth }]}
            autoplay
            pageInfo
            pageInfoBackgroundColor="rgba(255, 255, 255, 0.55)"
            isLooped
          >
            {picture.map(image => (
              <ImageLoad
                key={picture.indexOf(image)}
                loadingStyle={styles.loading}
                style={[styles.image, { width: dimensions.screenWidth }]}
                source={image ? { uri: image } : notFoundImage}
              />
            ))}
          </Carousel>
        </View>
      );
    }
    return (
      <ImageLoad
        style={[styles.image, { width: dimensions.screenWidth }]}
        loadingStyle={styles.loading}
        source={notFoundImage}
      />
    );
  }
}

CustomCarousel.propTypes = {
  target: PropTypes.object.isRequired,
  dimensions: PropTypes.object.isRequired
};
