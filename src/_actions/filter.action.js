import { filterConstants } from '../_constants';

function updateFilter(filt) {
  function setFilter(filter) {
    return { type: filterConstants.SET_FILTER, filter };
  }

  return dispatch => {
    dispatch(setFilter(filt));
  };
}

export const filterActions = {
  updateFilter
};
