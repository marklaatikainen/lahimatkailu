import { navigationConstants } from '../_constants';

export function navigation(state = { index: 1 }, action) {
  switch (action.type) {
    case navigationConstants.CHANGE_INDEX:
      return {
        index: action.index
      };
    default:
      return state;
  }
}
