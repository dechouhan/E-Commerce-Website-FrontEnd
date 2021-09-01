import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchShoppingCart } from "../../Thunk/productThunk";

export default function ShoppingCart() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchShoppingCart(1));
  },[dispatch]);
  const shoppingCart = useSelector(state=>state.Products.addToCart)
  const cartItem = shoppingCart.products.map((item)=>{
      return (
          <tr>
              <td>{item.productId}</td>
              <td>{item.quantity}</td>
          </tr>
      )
  })
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product Id</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
         {cartItem}
        </tbody>
      </Table>
    </div>
  );
}
