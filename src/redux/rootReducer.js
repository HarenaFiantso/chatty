import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

import appReducer from "./slices/app";

export const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
};

export const rootReducer = combineReducers({
  app: appReducer,
});
