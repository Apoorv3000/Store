import React from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

import { Product, Nav, Home } from "./components";

const App = () => {
  return (
    <div className="bg-light" style={{ height: "100vh" }}>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
