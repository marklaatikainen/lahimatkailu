import React, { Component } from 'react';
import { connect } from 'react-redux';

import { SliderComponent } from '../slider';

class SliderContainer extends Component {
  render() {
    return <SliderComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  filter: state.filter,
  dimensions: state.dimensions
});

export default connect(mapStateToProps)(SliderContainer);
