import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import appReducer from "./slices/app";
import conversationReducer from './slices/conversation';

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

export const rootReducer = combineReducers({
  app: appReducer,
  conversation: conversationReducer,
});
