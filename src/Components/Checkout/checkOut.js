import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

export default function CheckOutPage() {
  const history = useHistory();
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      e.target.names.value &&
      e.target.email.value &&
      e.target.address.value &&
      e.target.city.value &&
      e.target.mobile.value
    ) {
      alert("Product Is Ordered");
      history.push("/homepage");
    } else {
      alert("Invalid Input");
    }
  };
  return (
    <div>
      <br />
      <h1>Checkout Page</h1>
      <br />
      <br />
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" name="names" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              name="address"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="Enter City" name="city" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile"
              name="mobile"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
