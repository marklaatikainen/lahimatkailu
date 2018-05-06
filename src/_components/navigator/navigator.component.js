import { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from '../../_helpers';
import startNavigation, {
  registerScreens,
  registerScreenVisibilityListener
} from './navigator.register';

registerScreens(store, Provider);
registerScreenVisibilityListener();
startNavigation();

export class Navigator extends Component {}
