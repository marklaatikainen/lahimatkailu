import { Dimensions } from 'react-native';
import { dimensionsConstants } from '../_constants';

export function dimensions(state = {}, action) {
  switch (action.type) {
    case dimensionsConstants.GET_DIMENSIONS:
      return {
        screenHeight: Dimensions.get('screen').height,
        screenWidth: Dimensions.get('screen').width,
        windowHeight: Dimensions.get('window').height,
        windowWidth: Dimensions.get('window').width
      };
    default:
      return state;
  }
}
