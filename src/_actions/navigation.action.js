import { navigationConstants } from '../_constants';

function changeIndex(index) {
  function setIndex(i) {
    return { type: navigationConstants.CHANGE_INDEX, i };
  }

  return dispatch => {
    dispatch(setIndex(index));
  };
}

function navigate(name) {
  function setStack(route) {
    return { type: navigationConstants.NAVIGATE, route };
  }

  return dispatch => {
    dispatch(setStack(name));
  };
}

function goBack() {
  function setStack() {
    return { type: navigationConstants.BACK };
  }

  return dispatch => {
    dispatch(setStack());
  };
}

export const navigationActions = {
  changeIndex,
  navigate,
  goBack
};
