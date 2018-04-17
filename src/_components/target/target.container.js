import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { Target } from '../target';

class TargetContainer extends Component {
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
