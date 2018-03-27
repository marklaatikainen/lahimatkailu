import React, {Component} from 'react';
import {View} from 'react-native';
import CheckBoxes from './checkBoxComponent';
import MapViewComponent from './mapview';
import TargetInfo from './targetInfo';

export default class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            item: [],
            selectedItem: '',
            selectedItemRegion: null,
            options: {
                food: true,
                sight: true,
                service: true
            }
        }
    }

    checked(data) {
        this.setState({options: data});
    }

    backToList() {
        this.setState({selectedItem: '', item: []});
    }

    setSelectedItem(item, id, region) {
        this.setState({selectedItem: id, item: item, selectedItemRegion: region})
    }

    render() {
        const {item, selectedItem} = this.state;
        if (selectedItem === '') {
            return (
                <View>
                    <MapViewComponent
                        options={this.state.options}
                        setSelectedItem={(item, id, region) => this.setSelectedItem(item, id, region)}
                        region={this.state.selectedItemRegion}/>
                    <CheckBoxes onChange={(e) => this.checked(e)}/>
                </View>
            )
        } else {
            return <TargetInfo data={item} backToList={() => this.backToList()}/>
        }
    }

}