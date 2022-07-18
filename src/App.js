import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { Nav, Home, ProductInfo, Footer } from "./components";

const App = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Nav />
      <Container>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<ProductInfo />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
