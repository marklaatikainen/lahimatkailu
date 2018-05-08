import React, {Component} from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import PropTypes from 'prop-types';

import { styles, AccessibilityIcon } from '../target';

import Info from '../info/info.component';

export class IconBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
        show: false,
        visible: true
    };
  }

  toggle = (event) => { 
    this.setState({
      show:!this.state.show
    });
  }
  render() {
    const { symbols } = this.props.target;
    if (this.state.show) {
      return (
        <Info show={this.state.show} toggle={this.toggle} />
      );
    }
    return (
      <View>
        <TouchableOpacity style={styles.icons} onPress={this.toggle}>
          {symbols &&
            symbols.map(symbol => (
              <AccessibilityIcon key={symbol} name={symbol} />
              // text={this.context.t(symbol)}
            ))}
        </TouchableOpacity>
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
