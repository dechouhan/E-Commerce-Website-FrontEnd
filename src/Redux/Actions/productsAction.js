import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_CATEGORY,
  RESET_SHOW_PRODUCT_DETAILS,
  SHOW_PRODUCT_DETAILS,
} from ".";

export const fetchProductsAction = (data) => ({
  type: FETCH_PRODUCTS,
  payload: data,
});

export const fetchProductCategoryAction = (data) => ({
  type: FETCH_PRODUCT_CATEGORY,
  payload: data,
});

export const showProductDetailsAction = (data) => ({
  type: SHOW_PRODUCT_DETAILS,
  payload: data,
});
export const resetshowProductDetailsAction = () => ({
  type: RESET_SHOW_PRODUCT_DETAILS,
});

export const addCartAction = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});
