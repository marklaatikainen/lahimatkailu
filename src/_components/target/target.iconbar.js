import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { styles, AccessibilityIcon } from '../target';

export class IconBar extends Component {
  render() {
    const { symbols } = this.props.target;

    return (
      <View style={styles.icons}>
        {symbols &&
          symbols.map(symbol => (
            <AccessibilityIcon key={symbol} name={symbol} text={this.context.t(symbol)} />
          ))}
      </View>
    );
  }
}

IconBar.contextTypes = {
  t: PropTypes.func.isRequired
};

IconBar.propTypes = {
  target: PropTypes.object.isRequired
};
