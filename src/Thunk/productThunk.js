import {
  addCartAction,
  fetchProductCategoryAction,
  fetchProductsAction,
} from "../Redux/Actions/productsAction";
import ProductService from "../Services/ProductService";

export const addToCart = (data) => async (dispatch) => {
  try {
    const res = await ProductService.addCart(data);
    dispatch(addCartAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const fetchProductCategory = () => async (dispatch) => {
  try {
    const res = await ProductService.getProductCategory();
    dispatch(fetchProductCategoryAction(res.data));
  } catch (err) {
    alert(err);
  }
};
export const fetchProductByCategory = (categoryName) => async (dispatch) => {
  try {
    const res = await ProductService.getProductByCategory(categoryName);
    dispatch(fetchProductsAction(res.data));
  } catch (err) {
    alert(err);
  }
};
export const fetchProducts = (limit, sort) => async (dispatch) => {
  try {
    const res = await ProductService.getProducts(limit, sort);
    dispatch(fetchProductsAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const fetchShoppingCart = (userId) => async (dispatch) => {
  try {
    const res = await ProductService.getShoppingCart(userId);
    console.log(res.data);
    dispatch(addCartAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const sortProductsAction = (data) => async (dispatch) => {
  try {
    dispatch(fetchProductsAction(data));
  } catch (err) {
    alert(err);
  }
};