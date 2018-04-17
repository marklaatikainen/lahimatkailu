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
