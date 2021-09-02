import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import { Container, Nav, Navbar } from "react-bootstrap";
import PrivateRoute from "./Components/Routes/privateRoute";
import PublicRoute from "./Components/Routes/publicRoute";
import Logout from "./Components/Logout";
import { useSelector } from "react-redux";
import Homepage from "./Components/Homepage/homepage";
import SeeProductDetails from "./Components/Homepage/seeFullDetailsOfProduct";
import ShoppingCart from "./Components/Cart/shoppingCart";
import CheckOutPage from "./Components/Checkout/checkOut";

function App() {
  const token = useSelector((state) => state.Users.token);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Weather App
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Homepage
              </Nav.Link>
              {token ? (
                <>
                  <Nav.Link as={Link} to="/shoppingcart">
                    Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/logout">
                    Logout
                  </Nav.Link>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <PrivateRoute component={Logout} exact path="/logout" />
          <PrivateRoute component={CheckOutPage} exact path="/checkout" />
          <Route component={Homepage} exact path="/homepage" />
          <Route component={Homepage} exact path="/" />
          <Route
            component={SeeProductDetails}
            exact
            path="/seeproductdetails"
          />
          <PrivateRoute component={ShoppingCart} exact path="/shoppingcart" />
          <PublicRoute component={Signup} exact path="/signup" />
          <PublicRoute component={Login} exact path="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
