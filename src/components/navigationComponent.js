import React, {Component} from 'react';
import {View, Dimensions, StatusBar, BackHandler} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsPage from './settingspage';
import MainPage from './mainpage';
import SearchPage from './searchpage';

// style
import {styles} from './styles/navigationcomponentstyle';

const initialLayout = {
    height: 0,
    width: Dimensions
        .get('window')
        .width
};

const FirstRoute = () => <View style={[
    styles.container, {
        backgroundColor: '#fff'
    }
]}>
    {/* Asetussivu */}
    <SettingsPage/>
</View>;

const SecondRoute = () => <View
    style={[
    styles.container, {
        backgroundColor: '#fff'
    }
]}>
    {/* Pääsivu */}
    <MainPage/>
</View>;

const ThirdRoute = () => <View style={[
    styles.container, {
        backgroundColor: '#fff'
    }
]}>
    {/* Hakusivu */}
    <SearchPage/>
</View>;

export default class NavigatorComponent extends Component {

    state = {
        index: 1,
        stack: [1],
        routes: [
            {
                key: 'first',
                icon: 'gears'
            }, {
                key: 'second',
                icon: 'home'
            }, {
                key: 'third',
                icon: 'search'
            }
        ],
        // isImmersive: false,
        // isRestoreImmersive: true,
        // immersiveState: null
    };

    _handleIndexChange = index => {
        let stack = this.state.stack;
        stack.push(index);
        this.setState({ index: index, stack: stack });
    };

    _renderHeader = props => <TabBar {...props}/>;

    _renderScene = SceneMap({first: FirstRoute, second: SecondRoute, third: ThirdRoute});

    _renderIcon({route}) {
        if (route.icon != null) 
            return (<Icon name={route.icon} size={22} style={styles.icon}/>)
    }

    componentDidMount() {
        StatusBar.setHidden(true);
        // BackHandler.addEventListener("hardwareBackPress", this.androidBackHandler); 
    }

    // androidBackHandler = () => {
    //     let stack = this.state.stack;
    //     if (stack.length > 1) {
    //         stack.pop();
    //         this.setState({
    //             index: stack[stack.length -1],
    //             stack: stack
    //         })
    //         return true;
    //     }
    // }

    componentWillUnmount() {
        // BackHandler.removeEventListener("hardwareBackPress", this.androidBackHandler); 
    }

    renderFooter = (props) => <TabBar {...props} style={styles.tabBar} renderIcon={this._renderIcon}/>
    render() {
        return (<TabViewAnimated
            style={styles.container}
            navigationState={this.state}
            renderScene={this._renderScene}
            renderFooter={this.renderFooter}
            onIndexChange={this._handleIndexChange}
            initialLayout={initialLayout}/>);
    }
}