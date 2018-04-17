import { dimensionsConstants } from '../_constants';

function getDimensions() {
  function get() {
    return { type: dimensionsConstants.GET_DIMENSIONS };
  }

  return dispatch => {
    dispatch(get());
  };
}

export const dimensionsActions = {
  getDimensions
};
