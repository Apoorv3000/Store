import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

const Nav = () => {
  return (
    <nav>
      <Navbar
        variant="dark"
        bg="primary"
        className="shadow-sm mb-2 px-4"
        sticky="top"
      >
        <Container
          fluid
          className="d-flex justify-content-between px-5 align-items-center justify-content-lg-evenly"
        >
          <Navbar.Brand
            href="/"
            className="display-5 align-items-center d-flex font-weight-bold"
          >
            <div className="display-6 fw-bold d-flex align-self-center">
              Store <span className="text-warning">.</span>
            </div>
          </Navbar.Brand>
          <form className="d-inline-flex flex-fill mx-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-warning px-3" type="submit">
              Search
            </button>
          </form>
          <button className="mx-4 btn btn-light text-dark px-3 fw-bold">
            Login
          </button>
          <div className="position-relative">
            <FontAwesomeIcon
              icon={solid("basket-shopping")}
              className="text-white position-relative"
              size="xl"
            />
            <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-warning text-dark">
              1
            </span>
          </div>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Nav;
