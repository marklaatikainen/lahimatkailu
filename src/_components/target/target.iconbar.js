import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import { styles, AccessibilityIcon } from '../target';

import InfoContainer from '../info/info.container';

export class IconBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      visible: true
    };
  }

  toggle = () => {
    this.setState({
      show: !this.state.show
    });
  };
  render() {
    const { symbols } = this.props.target;
    if (this.state.show) {
      return <InfoContainer show={this.state.show} toggle={this.toggle} />;
    }
    return (
      <View style={styles.icons}>
        {symbols &&
          symbols.map(symbol => (
            <TouchableOpacity
              key={symbol}
              onPress={this.toggle}
            >
              <AccessibilityIcon name={symbol} />
            </TouchableOpacity>
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
