import React, { Fragment } from "react";
import LoginModal from "../components/auth/LoginModal";
import { Navbar, Container, Nav, Row, Col } from "reactstrap";

const AppNavbar = () => {
  return (
    <Fragment>
      <Navbar bg="light" className="sticky-top">
        <Container>
          <Row>
            <Col>
              <Nav className="ml-auto d-felx justify-content-around" navbar>
                {false ? (
                  <h1 className="text-white">authLink</h1>
                ) : (
                  <LoginModal />
                )}
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
