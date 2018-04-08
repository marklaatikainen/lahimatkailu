import { filterConstants } from '../_constants';

export const filterActions = {
  updateFilter
};

function updateFilter(filter) {
  return dispatch => {
    dispatch(setFilter(filter));
  };

  function setFilter(filter) {
    return { type: filterConstants.SET_FILTER, filter };
  }
}
