import React from 'react';
import { TouchableOpacity } from 'react-native';
import {
  TabNavigator,
  StackNavigator,
  HeaderBackButton
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
// components
import MainPage from '../mainpage/main.component';
import TargetContainer from '../target/target.container';
import ListPageContainer from '../listpage/listpage.container';
import SettingsContainer from '../settings/settings.container';
import { styles } from '../navigator';

export const TargetStack = StackNavigator(
  {
    Target: {
      screen: TargetContainer,
      navigationOptions: {
        title: 'Kohteen tiedot',
        headerStyle: styles.topBar,
        headerTitleStyle: styles.topBarText,
        headerLeft: (
          <TouchableOpacity
            style={styles.backIcon}
            onPress={() => {
              this.props.navigation.navigate('Tabs');
              this.props.dispatch(targetActions.closeTarget());
            }}
          >
            <Icon name="arrow-left" size={20} color="white" />
          </TouchableOpacity>
        )
      }
    }
  },
  { headerMode: 'screen' }
);

export const Tabs = TabNavigator(
  {
    Settings: {
      screen: SettingsContainer,
      navigationOptions: {
        tabBarIcon: () => <Icon name="gears" size={22} style={styles.icon} />
      }
    },
    Map: {
      screen: MainPage,
      navigationOptions: {
        tabBarIcon: () => <Icon name="home" size={22} style={styles.icon} />
      }
    },
    List: {
      screen: ListPageContainer,
      navigationOptions: {
        tabBarIcon: () => <Icon name="search" size={22} style={styles.icon} />
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'Map',
    tabBarOptions: {
      labelStyle: {
        fontSize: 12
      },
      style: {
        backgroundColor: '#74A335'
      },
      showIcon: true,
      showLabel: false
    }
  }
);

export const Navigator = StackNavigator(
  {
    Tabs: {
      screen: Tabs
    },
    Target: {
      screen: TargetStack
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);
