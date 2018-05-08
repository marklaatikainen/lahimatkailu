import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { TouchableHighlight, View, Text, Modal  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

import { styles } from '../info';

export default class Info extends Component {
    constructor(props) {
        super(props);

        this.state = {
            icons: []
        };
    };

    // componentDidMount() {
    //     this.fetchData();
    // }

    // async fetchData() {
    //     const res = await fetch('http://topiniskala.com:3000/v1/iconList.json');
    //     this.setState({
    //         icons: res
    //     });
    // }

    

    render() {
//const { symbols } = this.state.icons;

        return ( 
            <View>
                <Modal onRequestClose={this.props.toggle} transparent={true}>
                    <View style={styles.modal}>
                        <TouchableHighlight onPress={this.props.toggle}>
                            <Icon style={styles.cancel} name="times-circle" size={30} color="black" />
                        </TouchableHighlight>
                    </View>
                </Modal>
            </View>
        );
        
    }
}