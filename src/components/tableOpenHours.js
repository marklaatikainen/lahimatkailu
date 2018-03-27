import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Orientation from 'react-native-orientation'

const PORTRAIT_LAYOUT = {flexArr: [1.5, 1.5, 0.5, 3, 1.5, 1.5, 0.5, 3], heightArr: [22, 22, 22, 22]};
const LANDSCAPE_LAYOUT = {flexArr: [1.5, 1.5, 0.5, 3, 1.5, 1.5, 0.5, 3], heightArr: [22, 22, 22, 22]};

export default class TableOpenHours extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowLayout: {
                flexArr: [],
                heightArr: []
            }
        }
    }

    componentWillMount() {
        const initial = Orientation.getInitialOrientation();
        if (initial === 'PORTRAIT') {
          // do something
        } else {
          // do something else
        }
    }

    componentDidMount() {
        Orientation.addOrientationListener(this._orientationDidChange);
    }
  
    _orientationDidChange = (orientation) => {
      if (orientation === 'LANDSCAPE') {
        // do something with landscape layout
      } else {
        // do something with portrait layout
      }
    }

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