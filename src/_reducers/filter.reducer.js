import { filterConstants } from '../_constants';

export function filter(
  state = { filters: { filterText: '', filterSlider: [0, 100] } },
  action
) {
  switch (action.type) {
    case filterConstants.SET_FILTER:
      return {
        filters: action.filter
      };
    default:
      return state;
  }
}
