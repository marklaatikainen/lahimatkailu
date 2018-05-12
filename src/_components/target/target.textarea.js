import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import TableOpenHoursContainer from './target.openhours.container';
import { styles, IconBar } from '../target';
import { translate } from '../../_helpers';

export class TargetTextArea extends Component {
  render() {
    const { data } = this.props;

    return (
      <View style={styles.textarea}>
        <IconBar target={data} />
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.subtitle}>{this.context.t(translate(data.type))}</Text>
        <Text style={styles.description}>{data.info}</Text>
        <TableOpenHoursContainer />
      </View>
    );
  }
}

TargetTextArea.contextTypes = {
  t: PropTypes.func.isRequired
};

TargetTextArea.propTypes = {
  data: PropTypes.object.isRequired
};
