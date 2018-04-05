import { userlocationConstants } from "../_constants";

export const userlocationActions = {
    updateLocation
};

function updateLocation(location) {
    return dispatch => {
        dispatch(setUserLocation(location));
    };

    function setUserLocation(location) {
        return {type: userlocationConstants.SET_USER_LOCATION, location};
    }
}