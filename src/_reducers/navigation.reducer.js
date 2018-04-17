import { navigationConstants } from '../_constants';

const routes = [
  {
    key: 'settings',
    icon: 'gears'
  },
  {
    key: 'map',
    icon: 'home'
  },
  {
    key: 'search',
    icon: 'search'
  }
];

export function navigation(state = { index: 1, routes: routes }, action) {
  switch (action.type) {
    case navigationConstants.CHANGE_INDEX:
      return {
        index: action.index,
        routes: routes
      };
    default:
      return state;
  }
}
