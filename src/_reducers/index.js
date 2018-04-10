import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';

import { alldata, locationdata } from './data.reducer';
import { dimensions } from './dimensions.reducer';
import { region } from './region.reducer';
import { checkbox } from './checkbox.reducer';
import { target } from './target.reducer';
import { userlocation } from './userlocation.reducer';
import { filter } from './filter.reducer';
import { dropdown } from './dropdown.reducer';

const AppReducer = combineReducers({
  alldata,
  locationdata,
  dimensions,
  region,
  checkbox,
  target,
  userlocation,
  filter,
  i18nState,
  dropdown
});

export default AppReducer;
