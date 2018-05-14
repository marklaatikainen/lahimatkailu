import { dataConstants } from '../_constants';

/* eslint-disable no-nested-ternary */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */

export function alldata(state = {}, action) {
  switch (action.type) {
    case dataConstants.ALL_DATA_SUCCESS:
      return {
        ...state,
        data: action.data.sort(function(a, b) {
          return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
        })
      };
    case dataConstants.ALL_DATA_FAILURE:
      return { error: action.error };
    default:
      return state;
  }
}

export function locationdata(state = {}, action) {
  switch (action.type) {
    case dataConstants.LOCATION_DATA_SUCCESS:
      return {
        ...state,
        data: action.data
      };
    case dataConstants.LOCATION_DATA_FAILURE:
      return { error: action.error };
    default:
      return state;
  }
}
