import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Info } from '../info';

class InfoContainer extends Component {
  render() {
    return <Info {...this.props} />;
  }
}

const mapStateToProps = state => ({
  icon: state.icon
});

export default connect(mapStateToProps)(InfoContainer);
