import {
  DATAINFO_URL,
  STATUS_URL,
  TOPUPINFO_URL,
  TOPUP_URL,
  DATA_URL
} from "./config";
import { AsyncStorage } from "react-native";
import Expo from "expo";

const makeGetRequest = async url => {
  const token = await AsyncStorage.getItem("token");
  let response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    }
  });
  let data = await response.json();
  return data;
};

const makePostRequest = async (url, params) => {
  const token = await AsyncStorage.getItem("token");
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    },
    body: JSON.stringify(params)
  });
  let data = await response.json();
  return data;
};

export function getDataInfo(msisdn) {
  const url = DATAINFO_URL + "234" + msisdn.substr(1);
  console.log(url);
  return makeGetRequest(url);
}

export function initializeUser() {
  const url = STATUS_URL;
  console.log(url);
  console.log("done");
  return makeGetRequest(url);
}

export async function airtimePurchase(msisdn, amount) {
  const info_url = TOPUPINFO_URL + "234" + msisdn.substr(1);
  const purchase_url = TOPUP_URL + "234" + msisdn.substr(1);

  console.log(info_url);
  let data = await makeGetRequest(info_url);
  let product = data.products[0];
  console.log(JSON.stringify(product));

  let params = {
    product_id: product.product_id,
    denomination: amount,
    send_sms: false,
    sms_text: ""
  };
  let _response = await makePostRequest(purchase_url, params);
  console.log(JSON.stringify(_response));
  return _response;
}

export async function dataPurchase(msisdn, product) {
  const url = DATA_URL + "234" + msisdn.substr(1);
  //   console.log(url);

  let params = {
    product_id: product.product_id,
    denomination: product.denomination,
    send_sms: false,
    sms_text: ""
  };
  let response = await makePostRequest(url, params);
  //   console.log(JSON.stringify(response));
  return response;
}

export function updateWalletInfo() {
  return makeGetRequest(STATUS_URL);
}
