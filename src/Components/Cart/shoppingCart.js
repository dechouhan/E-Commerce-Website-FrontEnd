import React, { useEffect } from "react";
import { Container, Table, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchShoppingCart } from "../../Thunk/productThunk";

export default function ShoppingCart() {
  let cartItem = null;
  const history = useHistory();
  const dispatch = useDispatch();
  const userId = 1;
  //if we want to get data from api then we will use it code..
  useEffect(() => {
    dispatch(fetchShoppingCart(userId));
  }, [dispatch]);
  const shoppingCart = useSelector((state) => state.Products.addToCart);
  console.log(shoppingCart);
  if (shoppingCart.userId) {
    cartItem = shoppingCart.products.map((item) => {
      return (
        <tr>
          <td>{shoppingCart.date}</td>
          <td>{item.productId}</td>
          <td>{item.quantity}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <h1>Shopping Cart</h1>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Date</th>
              <th>Product Id</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>{cartItem}</tbody>
        </Table>
        <Button variant="warning" onClick={() => history.push("/checkout")}>
          Checkout
        </Button>
      </Container>
    </div>
  );
}
