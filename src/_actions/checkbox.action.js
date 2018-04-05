import { checkboxConstants } from "../_constants";

export const checkboxActions = {
    updateValues
};

function updateValues(value) {
    return dispatch => {
        dispatch(setVal(value));
    };

    function setVal(values) {
        return {type: checkboxConstants.SET_VALUES, values};
    }
}