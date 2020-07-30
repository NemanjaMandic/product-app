import { all } from "redux-saga/effects";
import productsSaga from "./products/sagas";

export default function* () {
  yield all([productsSaga()]);
}
