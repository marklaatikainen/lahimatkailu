import React, { Component } from 'react';
import { connect } from 'react-redux';

import { CheckBoxes } from '../checkboxes';

class CheckBoxesContainer extends Component {
  render() {
    return <CheckBoxes {...this.props} />;
  }
}

const mapStateToProps = state => ({
  checkbox: state.checkbox,
  lang: state.i18nState.lang,
  navigation: state.navigation
});

export default connect(mapStateToProps)(CheckBoxesContainer);
