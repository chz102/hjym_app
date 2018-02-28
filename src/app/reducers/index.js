import { combineReducers } from 'redux';

import nav from './nav';
import base from './base';
import home from './home';
import login from './login';

const rootReducer = combineReducers({
  nav,
  base,
  home,
    login
});

export default rootReducer;
