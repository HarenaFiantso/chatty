import appReducer from './slices/app';
import conversationReducer from './slices/conversation';

import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';

export const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
};

export const rootReducer = combineReducers({
  app: appReducer,
  conversation: conversationReducer,
});
