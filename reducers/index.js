import { combineReducers } from "redux";
import dataReducer from "./data";
import statusReducer from "./status";
import airtimeReducer from "./airtime";
import walletReducer from "./wallet";
import buyDataReducer from "./buyData";

const rootReducer = combineReducers({
  dataReducer,
  statusReducer,
  airtimeReducer,
  walletReducer,
  buyDataReducer
});

export default rootReducer;
