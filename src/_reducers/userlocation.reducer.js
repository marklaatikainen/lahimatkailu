import { userlocationConstants } from '../_constants';

const coords = {
  accuracy: 0,
  altitude: 0,
  heading: 0,
  latitude: 60.169856,
  longitude: 24.938379,
  speed: 0
};

export function userlocation(state = { coords }, action) {
  switch (action.type) {
    case userlocationConstants.SET_USER_LOCATION:
      return {
        coords: action.location
      };
    default:
      return state;
  }
}
