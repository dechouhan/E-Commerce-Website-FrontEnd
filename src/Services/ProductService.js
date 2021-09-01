import http from "./http-common";

class ProductService {
  getProducts(limit,sort){
      return http.get(`/products?limit=${limit}&sort=${sort}`)
  }
  getProductCategory() {
      return http.get('/products/categories')
  }
  getProductByCategory(categoryName) {
      return http.get(`/products/category/${categoryName}`)
  }
  addCart(data) {
      return http.post('/carts',data)
  }
  getShoppingCart(userId) {
      return http.get(`/carts/${userId}`)
  }
}
export default new ProductService();
