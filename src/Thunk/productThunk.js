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

export const fetchProducts = (limit, sort, category) => async (dispatch) => {
  try {
    const res = await ProductService.getProducts(limit, sort, category);
    dispatch(fetchProductsAction(res.data));
  } catch (err) {
    alert(err);
  }
};

export const fetchShoppingCart = (userId) => async (dispatch) => {
  try {
    const res = await ProductService.getShoppingCart(userId);
    dispatch(addCartAction(res.data));
  } catch (err) {
    alert(err);
  }
};
