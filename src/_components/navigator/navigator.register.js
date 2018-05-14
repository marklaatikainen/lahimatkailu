import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import { store } from '../../_helpers';

import { SettingsI18n, MapI18n, ListI18n, WelcomeI18n } from '../navigator';
import { navigationActions } from '../../_actions';

export function registerScreens(st, provider) {
  Navigation.registerComponent('lahimatkailu.WelcomeNavi', () => WelcomeI18n, st, provider);
  Navigation.registerComponent('lahimatkailu.SettingsNavi', () => SettingsI18n, st, provider);
  Navigation.registerComponent('lahimatkailu.MainNavi', () => MapI18n, st, provider);
  Navigation.registerComponent('lahimatkailu.ListNavi', () => ListI18n, st, provider);
}

// disable Promise warning
/* eslint-disable no-undef */

export function singlePageApp() {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'lahimatkailu.WelcomeNavi',
      navigatorStyle: {
        navBarHidden: true,
        statusBarHidden: true,
        overrideBackPress: true
      }
    }
  });
}

export default (startNavigation = () => {
  Promise.all([
    Icon.getImageSource('gears', 22, 'white'),
    Icon.getImageSource('home', 22, 'white'),
    Icon.getImageSource('search', 22, 'white')
  ]).then(icons => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: 'lahimatkailu.SettingsNavi',
          icon: icons[0],
          navigatorStyle: {
            navBarHidden: true,
            statusBarHidden: true,
            overrideBackPress: true
          }
        },
        {
          screen: 'lahimatkailu.MainNavi',
          icon: icons[1],
          navigatorStyle: {
            navBarHidden: true,
            statusBarHidden: true,
            overrideBackPress: true
          }
        },
        {
          screen: 'lahimatkailu.ListNavi',
          icon: icons[2],
          navigatorStyle: {
            navBarHidden: true,
            statusBarHidden: true,
            overrideBackPress: true
          }
        }
      ],
      appStyle: {
        initialTabIndex: 1,
        tabBarButtonColor: '#ffffff',
        tabBarSelectedButtonColor: 'yellow',
        tabBarBackgroundColor: '#74A335'
      }
    });
  });
});

export function registerScreenVisibilityListener() {
  const pages = ['lahimatkailu.SettingsNavi', 'lahimatkailu.MainNavi', 'lahimatkailu.ListNavi'];
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => store.dispatch(navigationActions.changeIndex(pages.indexOf(screen)))
  }).register();
}
