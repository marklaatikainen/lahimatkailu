import { targetConstants } from "../_constants";

export const targetActions = {
    openTarget,
    closeTarget
};

function openTarget(target) {
    return dispatch => {
        dispatch(open(target));
    };

    function open(target) {
        return {type: targetConstants.SELECT_TARGET, target};
    }
}

function closeTarget() {
    return dispatch => {
        dispatch(close());
    };

    function close() {
        return {type: targetConstants.DESELECT_TARGET};
    }
}