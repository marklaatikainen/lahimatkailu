import { targetConstants } from '../_constants';
import { NavigationActions } from 'react-navigation';

export const targetActions = {
  openTarget,
  closeTarget
};

function openTarget(target) {
  return dispatch => {
    dispatch(open(target));
    NavigationActions.navigate({ routeName: 'Target' });
  };

  function open(target) {
    return { type: targetConstants.SELECT_TARGET, target };
  }
}

function closeTarget() {
  return dispatch => {
    dispatch(close());
    NavigationActions.navigate({ routeName: 'Tabs' });
  };

  function close() {
    return { type: targetConstants.DESELECT_TARGET };
  }
}
