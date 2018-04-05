import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Search } from '../searchbar';

class SearchContainer extends Component {
  render() {
    return (<Search {...this.props}/>);
  }
}

const mapStateToProps = state => ({
  filter: state.filter
});

export default connect(mapStateToProps)(SearchContainer);