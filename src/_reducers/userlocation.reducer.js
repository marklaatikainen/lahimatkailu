import { userlocationConstants } from '../_constants';

const INIT_REGION = {
  latitude: 60.169856,
  longitude: 24.938379
};

export function userlocation(state = { location: INIT_REGION }, action) {
  switch (action.type) {
    case userlocationConstants.SET_USER_LOCATION:
      return {
        location: action.location
      };
    default:
      return state;
  }
}
