import React, { useEffect } from "react";
import { Card, Container, Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { resetshowProductDetailsAction, showProductDetailsAction } from "../../Redux/Actions/productsAction";
import { fetchProductByCategory, fetchProductCategory, fetchProducts } from "../../Thunk/productThunk";

export default function Homepage() {
  const  history = useHistory()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetshowProductDetailsAction())
    dispatch(fetchProducts());
    dispatch(fetchProductCategory());
  }, [dispatch]);

  const onChangefunc = (e) => {
    e.preventDefault();
    dispatch(fetchProducts(e.target.limit.value, e.target.sort.value));
  };
  const showProductDetailsFunc = (data)=>{
    dispatch(showProductDetailsAction(data))
    history.push("/seeproductdetails")
  }
  const productCategories = useSelector(
    (state) => state.Products.productCategory
  );

  const productCategory = productCategories.map((category) => {
    return (
      <>
        <Link onClick={()=>dispatch(fetchProductByCategory(category))} style={{ fontSize: "35px" }}>{category}</Link>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </>
    );
  });
  const products = useSelector((state) => state.Products.products);
  const product = products.map((data) => {
    return (
      <>
        <Card style={{ width: "18rem" }}>
        <Link onClick={()=>showProductDetailsFunc(data)}>
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
      <br />
      <center>
        {productCategory}
        <br/>
        <br/>
        <Form onSubmit={onChangefunc}>
          <Form.Select name="limit" aria-label="Default select example">
            <option>All</option>
            <option value="2">2</option>
            <option value="5">5</option>
            <option value="10">10</option>
          </Form.Select>
          <br/>
          <Form.Select name="sort" aria-label="Default select example">
            <option>All</option>
            <option value="desc">Desc</option>
            <option value="asc">Asc</option>
          </Form.Select>
          <br/>
          <Button type="submit">Filter</Button>
        </Form>
        <br />
        <Container>{product}</Container>
      </center>
    </div>
  );
}
