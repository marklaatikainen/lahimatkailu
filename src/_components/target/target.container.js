import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { Target } from '../target';
import { targetActions } from '../../_actions';

class TargetContainer extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
  }
  androidBackHandler = () => {
    const { dispatch, navigation } = this.props;
    dispatch(
      navigation.index === 1
        ? targetActions.closeMapTarget()
        : targetActions.closeListTarget()
    );
    return true;
  };

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.androidBackHandler
    );
  }

  render() {
    return <Target {...this.props} />;
  }
}

const mapStateToProps = state => ({
  target: state.target,
  dimensions: state.dimensions,
  lang: state.i18nState.lang,
  navigation: state.navigation
});

TargetContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(TargetContainer);
