import React, {Component} from 'react';
import {View, Dimensions, StatusBar} from 'react-native';
import {TabViewAnimated, TabBar, SceneMap} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import SettingsPage from './settingspage';
import MainPage from './mainpage';
import SearchPage from './searchpage';
import {Immersive} from 'react-native-immersive';

// style
import {styles} from './styles/navigationcomponentstyle';

const MyStatusBar = ({
    backgroundColor,
    ...props
}) => (
    <View style={[styles.statusBar, {
            backgroundColor
        }]}>
        <StatusBar translucent backgroundColor={backgroundColor} {...props}/>
    </View>
);

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
    onPress={this.isImmersive
    ? this.setImmersiveOff
    : this.setImmersiveOn}
    style={[
    styles.container, {
        backgroundColor: '#fff'
    }
]}>
    {/* <StatusBar backgroundColor="#74A335" barStyle="light-content"/> */}
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
        isImmersive: false,
        isRestoreImmersive: true,
        immersiveState: null
    };

    _handleIndexChange = index => this.setState({index});

    _renderHeader = props => <TabBar {...props}/>;

    _renderScene = SceneMap({first: FirstRoute, second: SecondRoute, third: ThirdRoute});

    _renderIcon({route}) {
        if (route.icon != null) 
            return (<Icon name={route.icon} size={22} style={styles.icon}/>)
    }

    setImmersiveOn = () => {
        Immersive.on()
        this.setState({isImmersive: true})
    }
    setImmersiveOff = () => {
        Immersive.off()
        this.setState({isImmersive: false})
    }

    getImmersiveState = () => Immersive
        .getImmersive()
        .then((immersiveState) => {
            this.setState({immersiveState})
        })

    setRestoreImmersiveOn = () => this.setState({isRestoreImmersive: true})
    setRestoreImmersiveOff = () => this.setState({isRestoreImmersive: false})

    restoreImmersive = () => {
        this.state.isRestoreImmersive && Immersive.setImmersive(this.state.isImmersive)
    }

    componentDidMount() {
        this.setImmersiveOn();
        Immersive.addImmersiveListener(this.restoreImmersive);
        setTimeout(this.setImmersiveOn, 2000);
    }

    componentWillUnmount() {
        Immersive.removeImmersiveListener(this.restoreImmersive)
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