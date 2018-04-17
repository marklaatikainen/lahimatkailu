import { dropdownConstants } from '../_constants';

function openDropdown() {
  function open() {
    return { type: dropdownConstants.OPEN_DROPDOWN };
  }

  return dispatch => {
    dispatch(open());
  };
}

function closeDropdown() {
  function close() {
    return { type: dropdownConstants.CLOSE_DROPDOWN };
  }

  return dispatch => {
    dispatch(close());
  };
}

export const dropdownActions = {
  openDropdown,
  closeDropdown
};
