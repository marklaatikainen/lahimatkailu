import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Target } from '../target';

class TargetContainer extends Component {

    render() {
        return (
            <Target {...this.props} />
        )
    }
}

const mapStateToProps = state => ({
    target: state.target,
    dimensions: state.dimensions
});

export default connect(mapStateToProps)(TargetContainer);