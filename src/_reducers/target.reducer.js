import { targetConstants } from '../_constants';

export function target(state = {}, action) {
  switch (action.type) {
    case targetConstants.SELECT_TARGET:
      return {
        target: action.target
      };
    case targetConstants.DESELECT_TARGET:
      return {
        target: []
      };
    default:
      return state;
  }
}
