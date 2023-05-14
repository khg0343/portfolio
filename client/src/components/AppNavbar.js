import React, { Fragment, useCallback } from "react";
import {
  Navbar,
  NavItem,
  Container,
  Nav,
  Row,
  Col,
  Form,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";
import { sagaActions } from "../redux/sagas/sagaActions";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const { isAuthenticated, user, userRole } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch({ type: sagaActions.LOGOUT_REQUEST });
  }, [dispatch]);

  const guestLink = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <LoginModal />
      </NavItem>
    </Fragment>
  );

  const userLink = (
    <Fragment>
      <NavItem className="justify-content-center">
        <Form className="col mt-2">
          {user && user.name ? (
            <Link to="#">
              <Button outline color="light" className="px-3" block>
                <strong>{user ? `Welcome ${user.name}` : ""}</strong>
              </Button>
            </Link>
          ) : (
            <Button outline color="light" className="px-3" block>
              <strong>No User</strong>
            </Button>
          )}
        </Form>
      </NavItem>
      <NavItem>
        <Form className="col">
          <Link onClick={onLogout} to="#" className="">
            <Button outline color="light" className="mt-2" block>
              Logout
            </Button>
          </Link>
        </Form>
      </NavItem>
    </Fragment>
  );

  return (
    <Fragment>
      <Navbar bg="light" className="sticky-top">
        <Container>
          <Row>
            <Col>
              <Nav className="ml-auto d-felx justify-content-around" navbar>
                {isAuthenticated ? userLink : guestLink}
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
