import { Dimensions } from 'react-native';
import { dimensionsConstants } from '../_constants';

const defaultDimensions = {
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width
};

export function dimensions(state = defaultDimensions, action) {
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
