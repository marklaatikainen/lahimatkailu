import { regionConstants } from '../_constants';

const INITIAL_REGION = {
  latitude: 60.169856,
  longitude: 24.938379,
  latitudeDelta: 0.22,
  longitudeDelta: 0.22
};

export function region(state = { region: INITIAL_REGION }, action) {
  switch (action.type) {
    case regionConstants.SET_REGION:
      return {
        region: action.region
      };
    default:
      return state;
  }
}
