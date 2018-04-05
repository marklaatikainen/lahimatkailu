import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { styles } from '../target';

export class TableOpenHours extends Component {

    render() {
        const { target } = this.props.target;
        const { openingHours } = target;
        const { mon, tue, wed, thu, fri, sat, sun } = openingHours;
        
        const tableRows2 = [
            ['Ma', mon.start, '-', mon.end, 'Pe', fri.start, '-', fri.end],
            ['Ti', tue.start, '-', tue.end, 'La', sat.start, '-', sat.end],
            ['Ke', wed.start, '-', wed.end, 'Su', sun.start, '-', sun.end],
            ['To', thu.start, '-', thu.end, '', '', '', '']

        ];

        return (
            <View>
                <Text style={styles.openingTitle}>Aukioloajat</Text>
                <Table style={styles.opening} borderStyle={{ borderWidth: 0 }}>
                    <Rows flexArr={[1.5, 1.5, 0.5, 3, 1.5, 1.5, 0.5, 3]} heightArr={[22, 22, 22, 22]} data={tableRows2}></Rows>
                </Table>
            </View>
        )
    }
}

TableOpenHours.propTypes = {
    target: PropTypes.object.isRequired
};