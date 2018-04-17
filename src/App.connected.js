import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { AsyncStorage, BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { setLanguage } from 'redux-i18n';
import { Navigator } from './_components/navigator';
import { Dimensions } from 'react-native';
import { dimensionsActions, targetActions } from './_actions';

class ConnectedApp extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.androidBackHandler);
    const { dispatch } = this.props;
    AsyncStorage.getItem('lang', (err, result) => {
      if (result !== null) {
        dispatch(setLanguage(result));
      } else {
        dispatch(setLanguage('fi'));
      }
    });
    dispatch(dimensionsActions.getDimensions());
    Dimensions.addEventListener('change', () =>
      dispatch(dimensionsActions.getDimensions())
    );
  }

  componentWillUnmount() {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.androidBackHandler
    );
  }

  androidBackHandler = () => {
    const { dispatch, navigation } = this.props;
    const { mapPageTarget, listPageTarget } = this.props.target;
    let rightTarget = navigation.index === 1 ? mapPageTarget : listPageTarget;
    if (!rightTarget) {
      rightTarget = mapPageTarget ? mapPageTarget : listPageTarget;
    }

    if (mapPageTarget || listPageTarget) {
      if (rightTarget && rightTarget._id) {
        dispatch(
          navigation.index === 1
            ? targetActions.closeMapTarget()
            : targetActions.closeListTarget()
        );
        return true;
      }
    }
    return false;
  };

  render() {
    return <Navigator {...this.props} />;
  }
}

const mapStateToProps = state => ({
  target: state.target,
  lang: state.i18nState.lang,
  navigation: state.navigation
});

ConnectedApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
  target: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(ConnectedApp);
