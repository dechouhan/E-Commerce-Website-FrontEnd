import React, { useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { loginUser } from "../Thunk/userThunk";

export default function Signup() {
  const history = useHistory();
  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  let redirectTo = query.get("redirectTo");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.Users.token);
  useEffect(() => {
    if (token) {
      if (redirectTo) {
        history.push(redirectTo);
      } else {
        history.push("/homepage");
      }
    }
  });
  const submitHandler = (e) => {
    e.preventDefault();
    if (e.target.username.value && e.target.password.value) {
      dispatch(
        loginUser({
          username: e.target.username.value,
          password: e.target.password.value,
        })
      );
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
