import {
  UPDATE_WALLET_PENDING,
  UPDATE_WALLET_FULFILLED,
  UPDATE_WALLET_REJECTED
} from "../constants/actionTypes";

const initialState = {
  walletInfo: { balance: 1 },
  isFetching: false,
  error: false
};

export default function walletReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_WALLET_PENDING:
      return {
        ...state,
        isFetching: true
      };
    case UPDATE_WALLET_FULFILLED:
      return {
        ...state,
        walletInfo: action.payload,
        isFetching: false
      };
    case UPDATE_WALLET_REJECTED:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
