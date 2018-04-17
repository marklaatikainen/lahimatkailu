import { targetConstants } from '../_constants';

function openMapTarget(targ) {
  function open(target) {
    return { type: targetConstants.SELECT_MAP_TARGET, target };
  }

  return dispatch => {
    dispatch(open(targ));
  };
}

function closeMapTarget() {
  function close() {
    return { type: targetConstants.DESELECT_MAP_TARGET };
  }

  return dispatch => {
    dispatch(close());
  };
}

function openListTarget(targ) {
  function open(target) {
    return { type: targetConstants.SELECT_LIST_TARGET, target };
  }

  return dispatch => {
    dispatch(open(targ));
  };
}

function closeListTarget() {
  function close() {
    return { type: targetConstants.DESELECT_LIST_TARGET };
  }

  return dispatch => {
    dispatch(close());
  };
}

export const targetActions = {
  openMapTarget,
  closeMapTarget,
  openListTarget,
  closeListTarget
};
