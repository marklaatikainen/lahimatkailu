import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Callout } from 'react-native-maps';

import { styles, CalloutContent } from '../map';

export class MapMarkerCallout extends Component {
    render() {
        return (
            <Callout style={styles.callout}>
                <CalloutContent {...this.props} />
            </Callout>
        );
    }
}

MapMarkerCallout.propTypes = {
    data: PropTypes.object.isRequired,
    userlocation: PropTypes.object.isRequired
}