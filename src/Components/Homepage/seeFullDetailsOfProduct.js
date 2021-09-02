import React, { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { addToCart } from "../../Thunk/productThunk";

export default function SeeProductDetails() {
  const history = useHistory();
  const dispatch = useDispatch();
  const lastLocation = useLocation();
  const ProductDetails = useSelector(
    (state) => state.Products.showProductDetails
  );
  const token = useSelector((state) => state.Users.token);
  useEffect(() => {
    if (!ProductDetails.id) {
      history.push("/homepage");
    }
  }, [history, ProductDetails]);

  const addToCartFunc = () => {
    if (token) {
      dispatch(
        addToCart({
          userId: 1,
          date: new Date(),
          products: [{ productId: ProductDetails.id, quantity: 1 }],
        })
      );
      alert("Product Added in Cart");
      history.push("homepage")
    } else {
      history.push(`/login?redirectTo=${lastLocation.pathname}`);
    }
  };
  const buyNowFunc = ()=>{
    if (token) {
      dispatch(
        addToCart({
          userId: 1,
          date: new Date(),
          product: [{ productId: ProductDetails.id, quantity: 1 }],
        })
      );
      alert("Product Added in Cart");
      history.push("/shoppingcart")
    } else {
      history.push(`/login?redirectTo=${lastLocation.pathname}`);
    }
  }

  return (
    <div>
      <center>
        <Card style={{ width: "25rem" }}>
          <Card.Img variant="top" src={ProductDetails.image} />
          <Card.Body>
            <Card.Title>{ProductDetails.title}</Card.Title>
            <Card.Text>
              <b>$ {ProductDetails.price}</b>
            </Card.Text>
            <Button variant="warning" onClick={() => addToCartFunc()}>
              Add to Cart
            </Button>
            <br />
            <br />
            <Button variant="warning" onClick={()=>buyNowFunc()}>Buy Now</Button>
            <Card.Text style={{ textAlign: "left" }}>
              <br />
              <b>Description-</b>
              <br />
              {ProductDetails.description}
            </Card.Text>
            <Card.Text style={{ textAlign: "left" }}>
              <br />
              <b>Rating-</b>
              <br />
              <b>Rate-</b> 5 out of {ProductDetails.rating.rate}
              <br />
              <b>Count-</b>
              {ProductDetails.rating.count}
            </Card.Text>
          </Card.Body>
        </Card>
      </center>
    </div>
  );
}
