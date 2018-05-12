import { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation, NativeEventsReceiver } from 'react-native-navigation';

import { store } from '../../_helpers';
import { registerScreens, singlePageApp, registerScreenVisibilityListener } from './navigator.register';

registerScreens(store, Provider);

registerScreenVisibilityListener();
Navigation.isAppLaunched().then(appLaunched => {
  if (appLaunched) {
    singlePageApp();
  }
  new NativeEventsReceiver().appLaunched(singlePageApp());
});

export class Navigator extends Component {}
