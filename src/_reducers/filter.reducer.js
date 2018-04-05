import { filterConstants } from '../_constants';

export function filter(state = { filterText: "" }, action) {
    switch (action.type) {
        case filterConstants.SET_FILTER_TEXT:
            return {
                filterText: action.filterText
            };
        default:
            return state;
    }
}