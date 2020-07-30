import { all, takeLatest, put } from "redux-saga/effects";

import { getProductsAPI } from "../../services/api";

import * as actions from "./actions";

export function* getProducts$() {
  try {
    const products = yield getProductsAPI();
    yield put(actions.getProductsSuccess(products.data));
  } catch (error) {
    yield put(actions.getProductsFail(error));
  }
}

export function* getProduct$({ payload }) {
  try {
    const response = yield getProductsAPI();
    const product = actions.getProductSuccess(response.data[payload]);
    yield put(product);
  } catch (error) {
    yield put(actions.getProductFail(error));
  }
}
export default function* () {
  yield all([
    takeLatest(actions.getProducts, getProducts$),
    takeLatest(actions.getProduct, getProduct$),
  ]);
}
