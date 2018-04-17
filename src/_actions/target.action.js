import { targetConstants } from '../_constants';
// import { NavigationActions } from 'react-navigation';

function openTarget(targ) {
  function open(target) {
    return { type: targetConstants.SELECT_TARGET, target };
  }

  return dispatch => {
    dispatch(open(targ));
    // NavigationActions.navigate({ routeName: 'Target' });
  };
}

function closeTarget() {
  function close() {
    return { type: targetConstants.DESELECT_TARGET };
  }

  return dispatch => {
    dispatch(close());
    // NavigationActions.navigate({ routeName: 'Tabs' });
  };
}

export const targetActions = {
  openTarget,
  closeTarget
};
