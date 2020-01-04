import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import AppReducer from "./AppReducer";

export default (history) =>
  combineReducers({
    router: connectRouter(history),
    app: AppReducer
  });
