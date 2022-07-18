import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Navbar
        variant="light"
        bg="light"
        className="shadow-sm mb-2 px-4"
        sticky="top"
      >
        <Container
          fluid
          className="d-flex justify-content-between px-5 align-items-center justify-content-lg-evenly"
        >
          <Link
            to="/"
            style={{ textDecoration: "none", color: "inherit" }}
            className="display-5 align-items-center d-flex font-weight-bold"
          >
            <div className="display-6 fw-bold d-flex align-self-center">
              FakeShop <span className="text-danger">.</span>
            </div>
          </Link>
          <form className="d-inline-flex flex-fill mx-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-danger px-3" type="submit">
              Search
            </button>
          </form>
          <button className="mx-4 btn btn-outline-dark  px-3 fw-bold">
            Login
          </button>
          <Link to="#" className="position-relative">
            <FontAwesomeIcon
              icon={solid("basket-shopping")}
              className="text-danger position-relative"
              size="xl"
            />
            <span className="position-absolute top-2 start-100 translate-middle badge rounded-pill bg-dark text-light">
              1
            </span>
          </Link>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Nav;
