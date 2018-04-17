import React, { Component } from 'react';
import { connect } from 'react-redux';

import { TableOpenHours } from '../target';

class TableOpenHoursContainer extends Component {
  render() {
    return <TableOpenHours {...this.props} />;
  }
}

const mapStateToProps = state => ({
  target: state.target,
  navigation: state.navigation
});

export default connect(mapStateToProps)(TableOpenHoursContainer);
