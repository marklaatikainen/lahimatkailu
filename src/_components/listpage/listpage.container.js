import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SearchPage } from '../listpage';

class ListPageContainer extends Component {
  render() {
    return (<SearchPage {...this.props}/>);
  }
}

const mapStateToProps = state => ({
  data: state.data,
  dimensions: state.dimensions, 
  region: state.region, 
  userlocation: state.userlocation
});

export default connect(mapStateToProps)(ListPageContainer);