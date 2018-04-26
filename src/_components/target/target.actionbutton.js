import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';

import { styles, openMap } from '../target';

export class ActionButtonContainer extends Component {
  render() {
    const { location } = this.props;

    return (
      <ActionButton offsetX={15} offsetY={15} buttonColor="rgba(116,163,53,1)">
        <ActionButton.Item
          buttonColor="blue"
          title={this.context.t('bookmark')}
          onPress={() => null }
        >
          <Icon name="save" style={styles.icon} />
        </ActionButton.Item>
        <ActionButton.Item
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
  location: PropTypes.object.isRequired
};
