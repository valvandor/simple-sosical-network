import { createStore, combineReducers } from 'redux';

import chatsReducer from "./chats/reducer"
import messagesReducer from './messages/reducer'; 
import { themeReducer } from "./themes/reducer";

export const store = createStore(
  combineReducers({
    themes: themeReducer,
    chats: chatsReducer,
    messages: messagesReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);