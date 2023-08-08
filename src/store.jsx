import { createStore, combineReducers } from "redux";
import urlReducer from "./reducers/urlReducer";

const rootReducer = combineReducers({
  urls: urlReducer,
});

const store = createStore(rootReducer);

export default store;
