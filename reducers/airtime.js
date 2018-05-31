import {
  BUY_AIRTIME_PENDING,
  BUY_AIRTIME_FULFILLED,
  BUY_AIRTIME_REJECTED
} from "../constants/actionTypes";
import { Alert } from "react-native";

const initialState = {
  airtimeInfo: null,
  isFetching: false,
  error: false
};

export default function airtimeReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_AIRTIME_PENDING:
      return {
        ...state,
        airtimeInfo: null,
        isFetching: true
      };
    case BUY_AIRTIME_FULFILLED:
      Alert.alert("Successful", "Your airtime purchase was successful");
      return {
        ...state,
        airtimeInfo: action.payload,
        isFetching: false
      };
    case BUY_AIRTIME_REJECTED:
      return {
        ...state,
        airtimeInfo: false,
        error: true
      };
    default:
      return state;
  }
}
