import { iconConstants } from '../_constants';
import { dataService } from '../_services';

function fetchIcons() {
  function success(list) {
    return { type: iconConstants.GET_ICONS, list };
  }
  function failure(error) {
    return { type: iconConstants.ICONS_FAILURE, error };
  }

  return dispatch => {
    dataService
      .getIconList()
      .then(data => dispatch(success(data), err => dispatch(failure(err))));
  };
}

export const iconActions = {
  fetchIcons
};
