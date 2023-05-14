import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Container,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  Row,
  Col,
} from "reactstrap";

const AppNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Fragment>
      <Navbar bg="light" className="sticky-top">
        <Container>
          <Row>
            <Col>
              <NavbarToggler onClick={toggle} />
            </Col>
            <Col>
              {/* <Collapse isOpen={isOpen} navbar>
                <Nav className="ml-auto d-flex justify-content-around" navbar>
                  <NavItem>
                    <Link to="/cart" className="nav-link">
                      <i className="fas fa-shopping-cart"></i> Cart
                    </Link>
                  </NavItem>
                </Nav>
              </Collapse> */}
            </Col>
          </Row>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavbar;
