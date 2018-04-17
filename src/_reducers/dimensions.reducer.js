import { Dimensions } from 'react-native';
import { dimensionsConstants } from '../_constants';

export function dimensions(state = {}, action) {
  switch (action.type) {
    case dimensionsConstants.GET_DIMENSIONS:
      return {
        screenHeight: Dimensions.get('screen').height,
        screenWidth: Dimensions.get('screen').width
      };
    default:
      return state;
  }
}
