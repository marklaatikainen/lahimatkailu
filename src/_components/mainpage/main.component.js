import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native';
import { connect } from 'react-redux';

import TargetContainer from '../target/target.container';
import MapContainer from '../map/map.container';
import CheckBoxesContainer from '../checkboxes/checkboxes.container';
import Panel from '../panel/panel.component';

class MainPage extends Component {
  shouldComponentUpdate(props) {
    return props.navigation.index === 1 ? true : false;
  }

  /* eslint-disable no-else-return */

  render() {
    const { mapPageTarget } = this.props.target;

    if (mapPageTarget && mapPageTarget._id) {
      return <TargetContainer />;
    } else {
      return (
        <View>
          <MapContainer />
          <Panel>
            <CheckBoxesContainer />
          </Panel>
        </View>
      );
    }
  }
}

const mapStateToProps = state => ({
  target: state.target,
  navigation: state.navigation
});

MainPage.propTypes = {
  target: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MainPage);
