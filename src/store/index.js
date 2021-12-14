import { createStore, combineReducers } from 'redux';

import { themeReducer } from "./themes/reducer";

export const store = createStore(
  combineReducers({
    themes: themeReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);