import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { loginUser } from "../Thunk/userThunk";

export default function Signup() {
  const history = useHistory();
  const { redirectTo } = useParams();
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      dispatch(
        loginUser({
          username: e.target.username.value,
          password: e.target.password.value,
        })
      );
      if (redirectTo) {
        history.push(redirectTo);
      }
    } else {
      alert("invlid input");
    }
  };
  return (
    <div>
      <br />
      <h1>Login Page</h1>
      <br />
      <br />
      <Container>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
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
