import { checkboxConstants } from '../_constants';

function updateValues(value) {
  function setVal(values) {
    return { type: checkboxConstants.SET_VALUES, values };
  }

  return dispatch => {
    dispatch(setVal(value));
  };
}

export const checkboxActions = {
  updateValues
};
