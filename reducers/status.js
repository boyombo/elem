import {
  INITIALIZE_FULFILLED,
  INITIALIZE_PENDING,
  INITIALIZE_REJECTED
} from "../constants/actionTypes";

const initialState = {
  userInfo: null,
  isFetching: false,
  error: false
};

export default function statusReducer(state = initialState, action) {
  switch (action.type) {
    case INITIALIZE_PENDING:
      return {
        ...state,
        userInfo: null,
        isFetching: true
      };
    case INITIALIZE_FULFILLED:
      return {
        ...state,
        userInfo: action.payload,
        isFetching: false
      };
    case INITIALIZE_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
