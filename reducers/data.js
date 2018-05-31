import {
  CHOOSE_DATA_PLAN,
  GET_DATA_PLANS_PENDING,
  GET_DATA_PLANS_FULFILLED,
  GET_DATA_PLANS_REJECTED
} from "../constants/actionTypes";

const initialState = {
  dataPlan: null,
  dataPlanList: [],
  isFetching: false,
  error: false
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case CHOOSE_DATA_PLAN:
      return {
        ...state,
        dataPlan: action.dataPlan
      };
    case GET_DATA_PLANS_PENDING:
      return {
        ...state,
        dataPlanList: [],
        isFetching: true
      };
    case GET_DATA_PLANS_FULFILLED:
      return {
        ...state,
        dataPlanList: action.payload,
        isFetching: false
      };
    case GET_DATA_PLANS_REJECTED:
      return {
        ...state,
        dataPlanList: [],
        isFetching: false,
        error: true
      };
    default:
      return state;
  }
}
