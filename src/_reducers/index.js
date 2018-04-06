import { combineReducers } from 'redux';
import { i18nState } from 'redux-i18n';

import { data } from './data.reducer';
import { dimensions } from './dimensions.reducer';
import { region } from './region.reducer';
import { checkbox } from './checkbox.reducer';
import { target } from './target.reducer';
import { userlocation } from './userlocation.reducer';
import { filter } from './filter.reducer';

const AppReducer = combineReducers({
  data,
  dimensions,
  region,
  checkbox,
  target,
  userlocation,
  filter,
  i18nState
});

export default AppReducer;
