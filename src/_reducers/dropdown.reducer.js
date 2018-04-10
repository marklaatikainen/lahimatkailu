import { dropdownConstants } from '../_constants';

export function dropdown(state = { state: false }, action) {
  switch (action.type) {
    case dropdownConstants.OPEN_DROPDOWN:
      return {
        state: true
      };
    case dropdownConstants.CLOSE_DROPDOWN:
      return {
        state: false
      };
    case dropdownConstants.START_ANIMATION:
      return {
        ...state,
        animation: true
      };
    case dropdownConstants.STOP_ANIMATION:
      return {
        ...state,
        animation: false
      };
    default:
      return state;
  }
}
