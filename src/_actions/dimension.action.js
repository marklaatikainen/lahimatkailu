import { dimensionsConstants } from "../_constants";

export const dimensionsActions = {
    getDimensions
};

function getDimensions() {
    return dispatch => {
        dispatch(get());
    };

    function get() {
        return {type: dimensionsConstants.GET_DIMENSIONS};
    }
}

function fetchDataByLocation(region) {
    return dispatch => {
        dispatch(request());

        dataService
            .fetchDataByLocation(region)
            .then(data => dispatch(success(data)), error => {
                dispatch(failure(error));
            });
    };

    function request() {
        return {type: dataConstants.DATA_REQUEST};
    }
    function success(data) {
        return {type: dataConstants.DATA_SUCCESS, data};
    }
    function failure(error) {
        return {type: dataConstants.DATA_FAILURE, error};
    }
}
