import { combineReducers } from "redux";
import authReducer from "./auth";
import LinkDataReducer from "./linkData";
import servicesReducer from "./services";
import appReducer from "./app";
const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  linkData: LinkDataReducer,
  services: servicesReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
