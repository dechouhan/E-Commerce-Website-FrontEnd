import {
  ADD_TO_CART,
  FETCH_PRODUCTS,
  FETCH_PRODUCT_CATEGORY,
  RESET_PRODUCTS,
  RESET_SHOW_PRODUCT_DETAILS,
  SHOW_PRODUCT_DETAILS,
} from "../Actions";

const initialState = {
  products: [],
  productCategory: [],
  showProductDetails: {},
  addToCart: [],
};

const Products = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_PRODUCT_CATEGORY:
      return {
        ...state,
        productCategory: action.payload,
      };
    case SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        showProductDetails: action.payload,
      };
    case RESET_SHOW_PRODUCT_DETAILS:
      return {
        ...state,
        showProductDetails: {},
      };
    case ADD_TO_CART:
      return {
        ...state,
        addToCart: action.payload,
      };
    case RESET_PRODUCTS:
      return {
        ...state,
        products: [],
      };
    default:
      return state;
  }
};

export default Products;
