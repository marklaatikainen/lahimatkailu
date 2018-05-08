import { iconConstants } from '../_constants';

export function icon(state = { list: [] }, action) {
  switch (action.type) {
    case iconConstants.GET_ICONS:
      return {
        list: action.list
      };
    default:
      return state;
  }
}
