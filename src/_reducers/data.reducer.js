import { dataConstants } from "../_constants";

export function data(state = {}, action) {
    switch (action.type) {
        case dataConstants.DATA_REQUEST:
            return {loading: true};
        case dataConstants.DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.data
            };
        case dataConstants.DATA_FAILURE:
            return {error: action.error};
        default:
            return state;
    }
}