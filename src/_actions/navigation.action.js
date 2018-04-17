import { navigationConstants } from '../_constants';

function changeIndex(ind) {
  function setIndex(index) {
    return { type: navigationConstants.CHANGE_INDEX, index };
  }

  return dispatch => {
    dispatch(setIndex(ind));
  };
}

export const navigationActions = {
  changeIndex
};
