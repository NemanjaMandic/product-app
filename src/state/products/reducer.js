import * as actions from "./actions";
import initialState from "./initialState";

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.GET_PRODUCTS:
      return {
        ...state,
        inProgress: true,
      };

    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        inProgress: false,
        data: payload,
      };

    case actions.GET_PRODUCTS_FAIL:
      return {
        ...state,
        inProgress: false,
        error: payload,
      };
    case actions.GET_PRODUCT:
      return {
        ...state,
        product: {
          ...state.product,
          inProgress: true,
        },
      };
    case actions.GET_PRODUCT_SUCCESS:
      return {
        ...state,
        product: {
          inProgress: false,
          data: payload,
        },
      };

    case actions.GET_PRODUCT_FAIL:
      return {
        ...state,
        product: {
          inProgress: false,
          error: payload,
        },
      };
    default:
      return state;
  }
};
