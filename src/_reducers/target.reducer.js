import { targetConstants } from '../_constants';

export function target(state = {}, action) {
  switch (action.type) {
    case targetConstants.SELECT_MAP_TARGET:
      return {
        ...state,
        mapPageTarget: action.target
      };
    case targetConstants.SELECT_LIST_TARGET:
      return {
        ...state,
        listPageTarget: action.target
      };
    case targetConstants.DESELECT_MAP_TARGET:
      return {
        ...state,
        mapPageTarget: null
      };
    case targetConstants.DESELECT_LIST_TARGET:
      return {
        ...state,
        listPageTarget: null
      };
    default:
      return state;
  }
}
