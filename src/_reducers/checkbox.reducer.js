import { checkboxConstants } from '../_constants';

export const INIT_VALUES = {
  food: true,
  service: true,
  sight: true
};

export function checkbox(state = { values: INIT_VALUES }, action) {
  switch (action.type) {
    case checkboxConstants.SET_VALUES:
      return {
        values: action.values
      };
    default:
      return state;
  }
}
