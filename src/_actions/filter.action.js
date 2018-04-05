import { filterConstants } from "../_constants";

export const filterActions = {
    setFilterText
};

function setFilterText(filterText) {
    return dispatch => {
        dispatch(setFilter(filterText));
    };

    function setFilter(filterText) {
        return {type: filterConstants.SET_FILTER_TEXT, filterText};
    }
}