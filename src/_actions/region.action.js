import { regionConstants } from '../_constants';

function setRegion(reg) {
  function setReg(region) {
    return { type: regionConstants.SET_REGION, region };
  }

  return dispatch => {
    dispatch(setReg(reg));
  };
}

export const regionActions = {
  setRegion
};
