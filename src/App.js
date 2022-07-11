import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { Product, Nav, Home } from "./components";

const App = () => {
  return (
    <>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
