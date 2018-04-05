import { regionConstants } from "../_constants";
import { dataActions } from ".";

export const regionActions = {
    setRegion
};

function setRegion(region) {
    return dispatch => {
        dispatch(setReg(region));
    };

    function setReg(region) {
        return {type: regionConstants.SET_REGION, region};
    }
}