import {
  BUY_DATA_PENDING,
  BUY_DATA_FULFILLED,
  BUY_DATA_REJECTED
} from "../constants/actionTypes";
import { Alert } from "react-native";

const initialState = {
  dataInfo: null,
  isFetching: false,
  error: false
};

export default function buyDataReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_DATA_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case BUY_DATA_FULFILLED:
      Alert.alert("Successful", "Your data purchase was successful");
      return {
        ...state,
        dataInfo: action.payload,
        isFetching: false
      };
    case BUY_DATA_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
