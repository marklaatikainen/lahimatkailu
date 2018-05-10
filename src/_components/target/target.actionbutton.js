import React, { Component } from 'react';
import { Linking, View } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';

import { styles, openMap, isFacebook, isInsta, facebookUrl, instaUrl } from '../target';

export class ActionButtonContainer extends Component {
  render() {
    const { location, data } = this.props;
    const { some } = data;
    return (
      <ActionButton
        offsetX={15}
        size={45}
        offsetY={15}
        backdrop={<View style={styles.blur} />}
        buttonColor="rgba(116,163,53,1)"
      >
        {isInsta(some) ? (
          <ActionButton.Item
            size={40}
            buttonColor="#e91e63"
            title={'Instagram'}
            onPress={() => Linking.openURL(instaUrl(some))}
          >
            <Icon name="instagram" style={styles.icon} />
          </ActionButton.Item>
        ) : (
          {}
        )}
        {isFacebook(some) ? (
          <ActionButton.Item
            size={40}
            buttonColor="blue"
            title={'Facebook'}
            onPress={() => Linking.openURL(facebookUrl(some))}
          >
            <Icon name="facebook-f" style={styles.icon} />
          </ActionButton.Item>
        ) : (
          {}
        )}
        {data.homepage ? (
          <ActionButton.Item
            size={40}
            buttonColor="purple"
            title={this.context.t('homepage')}
            onPress={() => Linking.openURL(data.homepage)}
          >
            <Icon name="home" style={styles.icon} />
          </ActionButton.Item>
        ) : (
          {}
        )}
        <ActionButton.Item
          size={40}
          buttonColor="green"
          title={this.context.t('navigate')}
          onPress={() => openMap(location)}
        >
          <Icon name="location-arrow" style={styles.icon} />
        </ActionButton.Item>
      </ActionButton>
    );
  }
}

ActionButtonContainer.contextTypes = {
  t: PropTypes.func.isRequired
};

ActionButtonContainer.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};
