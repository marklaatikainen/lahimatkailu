import { userlocationConstants } from '../_constants';

function updateLocation(loc) {
  function setUserLocation(location) {
    return { type: userlocationConstants.SET_USER_LOCATION, location };
  }

  return dispatch => {
    dispatch(setUserLocation(loc));
  };
}

export const userlocationActions = {
  updateLocation
};
