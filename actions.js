import {
  CHOOSE_DATA_PLAN,
  GET_DATA_PLANS,
  INITIALIZE,
  BUY_AIRTIME,
  UPDATE_WALLET,
  BUY_DATA
} from "./constants/actionTypes";
import {
  getDataInfo,
  initializeUser,
  airtimePurchase,
  dataPurchase,
  updateWalletInfo
} from "./data/api";

export function chooseDataPlan(dataPlan) {
  console.log("calling choose data plan with " + JSON.stringify(dataPlan));
  return {
    type: CHOOSE_DATA_PLAN,
    dataPlan: dataPlan
  };
}

export function getDataPlans(msisdn) {
  return {
    type: GET_DATA_PLANS,
    payload: getDataInfo(msisdn)
  };
}

export function initialize() {
  return {
    type: INITIALIZE,
    payload: initializeUser()
  };
}

export function buyAirtime(msisdn, amount) {
  return {
    type: BUY_AIRTIME,
    payload: airtimePurchase(msisdn, amount)
  };
}

export function buyData(msisdn, product) {
  return {
    type: BUY_DATA,
    payload: dataPurchase(msisdn, product)
  };
}

export function walletUpdate() {
  return {
    type: UPDATE_WALLET,
    payload: updateWalletInfo()
  };
}
