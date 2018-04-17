import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import MapContainer from '../map/map.container';
import CheckBoxesContainer from '../checkboxes/checkboxes.container';
import Panel from '../panel/panel.component';

class MainPage extends Component {
  render() {
    const { target, navigation } = this.props;
    return (
      <View>
        <MapContainer />
        {target.target && navigation.navigate('Target')}
        {/* navigation.navigate('Tabs')} */}
        <Panel>
          <CheckBoxesContainer />
        </Panel>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  target: state.target
});

MainPage.propTypes = {
  target: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MainPage);
