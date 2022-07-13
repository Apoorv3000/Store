import React from "react";
import { Container } from "react-bootstrap";

import { Banner, Products } from "..";

const Home = () => {
  return (
    <Container>
      <Banner />
      <Products />
    </Container>
  );
};

export default Home;
