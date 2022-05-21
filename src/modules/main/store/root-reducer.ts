import { combineReducers } from '@reduxjs/toolkit';

import { mainReducer } from './reducers/main';

export const rootReducer = combineReducers({
  mainReducer,
});
