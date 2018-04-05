import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Search } from '../searchbar';

class SearchContainer extends Component {
  render() {
    return (<Search {...this.props}/>);
  }
}

const mapStateToProps = state => ({
  data: state.data,
  dimensions: state.dimensions, 
  region: state.region, 
  userlocation: state.userlocation
});

export default connect(mapStateToProps)(SearchContainer);