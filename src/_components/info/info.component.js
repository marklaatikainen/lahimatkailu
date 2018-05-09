import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {TouchableOpacity, View, ScrollView, StatusBar, Text} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles, IconInfo} from '../info';

export class Info extends Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    const {list} = this.props.icon;

    return (
      <View>
        <Modal
          onRequestClose={this.props.toggle}
          transparent={true}
          isVisible={this.props.show}>
          <View style={styles.modal}>
            <View style={styles.topBar}>
              <TouchableOpacity onPress={this.props.toggle}>
                <Icon style={styles.cancel} name="times-circle" size={30} color="black"/>
              </TouchableOpacity>
              <Text style={styles.iconLegend}>{this.context.t('iconLegend')}</Text>
            </View>
            <ScrollView style={styles.iconsContainer}>
              {list.map(icon => (<IconInfo
                key={icon}
                text={this.context.t(icon)}
                item={icon}/>))}
            </ScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}

Info.contextTypes = {
  t: PropTypes.func.isRequired
};

Info.propTypes = {
  toggle: PropTypes.func.isRequired,
  icon: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired
};
