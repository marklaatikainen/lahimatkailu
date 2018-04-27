import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';
import { ListItem } from 'react-native-elements';

import { targetActions } from '../../_actions';
import { targetIcon, styles } from '../listpage';

export default class Item extends Component {
  render() {
    const { data } = this.props;

    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            this.props.dispatch(targetActions.openListTarget(data))
          }
        >
          <ListItem
            avatar={
              <Image
                source={{ uri: targetIcon(data.type) }}
                style={styles.listItemImg}
              />
            }
            title={data.name}
            subtitle={`${data.address.street} , ${data.address.city}`}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
