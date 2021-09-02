import http from "./http-common";

class ProductService {
  getProducts(limit, sort, category) {
    if (category) {
      return http.get(
        `/products/category/${category}?limit=${limit}&sort=${sort}`
      );
    }
    return http.get(`/products?limit=${limit}&sort=${sort}`);
  }
  getProductCategory() {
    return http.get("/products/categories");
  }
  addCart(data) {
    return http.post("/carts", data);
  }
  getShoppingCart(userId) {
    return http.get(`/carts/${userId}`);
  }
}
export default new ProductService();
