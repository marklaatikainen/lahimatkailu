import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TargetMap } from '../target';

class TargetMapContainer extends Component {
  render() {
    return <TargetMap {...this.props} />;
  }
}

const mapStateToProps = state => ({
  target: state.target,
  navigation: state.navigation
});

export default connect(mapStateToProps)(TargetMapContainer);
