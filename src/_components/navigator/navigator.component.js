import { Component } from 'react';
import { Provider } from 'react-redux';
import { Navigation, NativeEventsReceiver } from 'react-native-navigation';

import { store } from '../../_helpers';
import startNavigation, { registerScreens, registerScreenVisibilityListener } from './navigator.register';

registerScreens(store, Provider);
registerScreenVisibilityListener();
// startNavigation();

Navigation
  .isAppLaunched()
  .then(appLaunched => {
    if (appLaunched) {
      startNavigation();
    }
    new NativeEventsReceiver().appLaunched(startNavigation);
  });

export class Navigator extends Component {}
