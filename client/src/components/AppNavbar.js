import React, { Fragment, useCallback } from "react";
import { Navbar, NavItem, NavLink, Nav, Row, Col } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import LoginModal from "../components/auth/LoginModal";
import RegisterModal from "./auth/RegisterModal";
import { sagaActions } from "../redux/sagas/sagaActions";

const AppNavbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const onLogout = useCallback(() => {
    dispatch({ type: sagaActions.LOGOUT_REQUEST });
  }, [dispatch]);

  const guestLink = (
    <>
      <Row className="p-0">
        <Col className="m-0" xs="auto">
          <NavItem>
            <RegisterModal />
          </NavItem>
        </Col>
        <Col className="m-0" xs="auto">
          <NavItem>
            <LoginModal />
          </NavItem>
        </Col>
      </Row>
    </>
  );

  const userLink = (
    <>
      <Row className="p-0">
        <Col className="m-0" xs="auto">
          <NavItem>
            <NavLink to="#" className="p-1">
              <>{user ? `Welcome ${user.name}` : ""}</>
            </NavLink>
          </NavItem>
        </Col>
        <Col className="m-0" xs="auto">
          <NavItem>
            <NavLink onClick={onLogout} to="#" className="p-1">
              Logout
            </NavLink>
          </NavItem>
        </Col>
      </Row>
    </>
  );

  return (
    <div id="app-nav-bar">
      <Navbar className="sticky-top p-0">
        <Nav className="ms-auto" navbar>
          {isAuthenticated ? userLink : guestLink}
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
