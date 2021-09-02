import React, { useEffect } from "react";
import { Card, Container, Button, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  resetshowProductDetailsAction,
  showProductDetailsAction,
} from "../../Redux/Actions/productsAction";
import { fetchProductCategory, fetchProducts } from "../../Thunk/productThunk";

export default function Homepage() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetshowProductDetailsAction());
    dispatch(fetchProducts());
    dispatch(fetchProductCategory());
  }, [dispatch]);

  const onChangefunc = (e) => {
    e.preventDefault();
    console.log(e.target.category.value);
    dispatch(
      fetchProducts(
        e.target.limit.value,
        e.target.sort.value,
        e.target.category.value
      )
    );
  };
  const showProductDetailsFunc = (data) => {
    dispatch(showProductDetailsAction(data));
    history.push("/seeproductdetails");
  };
  const productCategories = useSelector(
    (state) => state.Products.productCategory
  );

  const productCategory = productCategories.map((category) => {
    return <option key={category}>{category}</option>;
  });
  const products = useSelector((state) => state.Products.products);
  const product = products.map((data) => {
    return (
      <>
        <Card style={{ width: "18rem" }} className="mx-auto my-2" key={data.id}>
          <Link onClick={() => showProductDetailsFunc(data)}>
            <Card.Img variant="top" src={data.image} />
            <Card.Body>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text>
                <b>$ {data.price}</b>
              </Card.Text>
            </Card.Body>
          </Link>
        </Card>

        <br />
      </>
    );
  });
  return (
    <div>
      <h1>Homepage</h1>
      <center>
        <Form onSubmit={onChangefunc}>
          Select Category:{" "}
          <select name="category">
            <option value="">All Category</option>
            {productCategory}
          </select>
          &nbsp; Select Limit:{" "}
          <select name="limit">
            <option>All Product</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          &nbsp; Select Order:{" "}
          <select name="sort">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button variant="warning" type="submit">
            Filter
          </Button>
        </Form>
        <br />
        <Container>
          <Row>{product}</Row>
        </Container>
      </center>
    </div>
  );
}
