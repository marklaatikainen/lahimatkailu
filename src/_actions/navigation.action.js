import { navigationConstants } from '../_constants';

export const navigationActions = {
  changeIndex,
  navigate,
  goBack
};

function changeIndex(index) {
  return dispatch => {
    dispatch(setIndex(index));
  };

  function setIndex(index) {
    return { type: navigationConstants.CHANGE_INDEX, index };
  }
}

function navigate(name) {
  return dispatch => {
    dispatch(setStack(name));
  };

  function setStack(route) {
    return { type: navigationConstants.NAVIGATE, route };
  }
}

function goBack() {
  return dispatch => {
    dispatch(setStack());
  };

  function setStack() {
    return { type: navigationConstants.BACK };
  }
}
