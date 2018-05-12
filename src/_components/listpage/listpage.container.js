import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchPage, filter } from '../listpage';

class ListPageContainer extends Component {
  render() {
    return <SearchPage {...this.props} />;
  }
}

const mapStateToProps = state => ({
  data: filter(state.alldata.data, state.userlocation, state.filter.filters, state.checkbox),
  dimensions: state.dimensions,
  region: state.region,
  filter: state.filter,
  dropdown: state.dropdown,
  navigation: state.navigation,
  target: state.target
});

export default connect(mapStateToProps)(ListPageContainer);
