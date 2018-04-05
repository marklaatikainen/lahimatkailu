import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View } from 'react-native'
import CheckBox from 'react-native-checkbox';
// style
import { styles } from '../checkboxes';

import Panel from '../panel/panel.component';
import { checkboxActions } from '../../_actions';

export class CheckBoxes extends Component {

    render() {
        const { dispatch, checkbox } = this.props;
        return (
            <Panel>
                <View checked={checkbox.values} style={styles.container}>
                    <CheckBox
                        labelStyle={styles.label}
                        labelBefore
                        label="Ruoka"
                        checked={checkbox.values.food}
                        onChange={(val) => dispatch(checkboxActions.updateValues({...checkbox.values, food: !val}))} />
                    <CheckBox
                        labelStyle={styles.label}
                        labelBefore
                        label="Kohteet"
                        checked={checkbox.values.sight}
                        onChange={(val) => dispatch(checkboxActions.updateValues({...checkbox.values, sight: !val}))} />
                    <CheckBox
                        labelStyle={styles.label}
                        labelBefore
                        label="Palvelut"
                        checked={checkbox.values.service}
                        onChange={(val) => dispatch(checkboxActions.updateValues({...checkbox.values, service: !val}))} />
                </View>
            </Panel>
        );
    }
}

CheckBoxes.propTypes = {
    checkbox: PropTypes.object.isRequired
}