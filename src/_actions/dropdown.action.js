import { dropdownConstants } from '../_constants';

export const dropdownActions = {
  openDropdown,
  closeDropdown
};

function openDropdown() {
  return dispatch => {
    dispatch(open());
  };

  function open() {
    return { type: dropdownConstants.OPEN_DROPDOWN };
  }
}

function closeDropdown() {
  return dispatch => {
    dispatch(close());
  };

  function close() {
    return { type: dropdownConstants.CLOSE_DROPDOWN };
  }
}
