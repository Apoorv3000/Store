import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Navbar variant="dark" bg="dark" className="shadow-sm">
        <Container
          fluid
          className="d-flex justify-content-between px-5 align-items-center"
        >
          <Navbar.Brand href="/" className="text-lg">
            Store
          </Navbar.Brand>
          <FontAwesomeIcon
            icon={solid("basket-shopping")}
            className="text-white"
            size="lg"
          />
        </Container>
      </Navbar>
    </nav>
  );
};

export default Nav;
