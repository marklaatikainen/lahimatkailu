import { dataConstants } from '../_constants';
import { dataService } from '../_services';

function fetchData() {
  function success(data) {
    return { type: dataConstants.ALL_DATA_SUCCESS, data };
  }
  function failure(error) {
    return { type: dataConstants.ALL_DATA_FAILURE, error };
  }

  return dispatch => {
    dataService.fetchData().then(
      data => dispatch(success(data)),
      error => {
        dispatch(failure(error));
      }
    );
  };
}

function fetchDataByLocation(region) {
  function success(data) {
    return { type: dataConstants.LOCATION_DATA_SUCCESS, data };
  }
  function failure(error) {
    return { type: dataConstants.LOCATION_DATA_FAILURE, error };
  }

  return dispatch => {
    dataService.fetchDataByLocation(region).then(
      data => dispatch(success(data)),
      error => {
        dispatch(failure(error));
      }
    );
  };
}

export const dataActions = {
  fetchData,
  fetchDataByLocation
};
