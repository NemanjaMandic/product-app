import { createAction } from "redux-actions";

export const GET_PRODUCTS = "GET_PRODUCTS";
export const getProducts = createAction(GET_PRODUCTS);

export const GET_PRODUCTS_SUCCESS = `${GET_PRODUCTS}_SUCCESS`;
export const getProductsSuccess = createAction(GET_PRODUCTS_SUCCESS);

export const GET_PRODUCTS_FAIL = `${GET_PRODUCTS}_FAIL`;
export const getProductsFail = createAction(GET_PRODUCTS_FAIL);

export const GET_PRODUCT = "GET_PRODUCT";
export const getProduct = createAction(GET_PRODUCT);

export const GET_PRODUCT_SUCCESS = `${GET_PRODUCT}_SUCCESS`;
export const getProductSuccess = createAction(GET_PRODUCT_SUCCESS);

export const GET_PRODUCT_FAIL = `${GET_PRODUCT}_FAIL`;
export const getProductFail = createAction(GET_PRODUCT_FAIL);
