import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

export default class TableOpenHours extends Component {

    render() {
        const openingHours = this.props.data;
        const tableRows2 = [
            ['Ma', openingHours.mon.start, '-', openingHours.mon.end, 'Pe', openingHours.fri.start, '-', openingHours.fri.end],
            ['Ti', openingHours.tue.start, '-', openingHours.tue.end, 'La', openingHours.sat.start, '-', openingHours.sat.end],
            ['Ke', openingHours.wed.start, '-', openingHours.wed.end, 'Su', openingHours.sun.start, '-', openingHours.sun.end],
            ['To', openingHours.thu.start, '-', openingHours.thu.end, '', '', '', '']

        ];

        return (
            <View>
                <Text style={this.props.style.openingTitle}>Aukioloajat</Text>
                <Table style={this.props.style.opening} borderStyle={{ borderWidth: 0 }}>
                    <Rows flexArr={[1.5, 1.5, 0.5, 3, 1.5, 1.5, 0.5, 3]} heightArr={[22, 22, 22, 22]} data={tableRows2}></Rows>
                </Table>
            </View>
        )
    }
}