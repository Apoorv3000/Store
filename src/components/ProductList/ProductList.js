import React from "react";
import { Col, Row } from "react-bootstrap";
import { Product, Poster } from "..";

const ProductList = ({ products }) => {
  return (
    <div>
      <Row>
        {products?.slice(0, 3)?.map((product) => (
          <Col>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
      <Row>
        {products?.slice(3, 5)?.map((product) => (
          <Col xs={6}>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>

      <Row>
        {products?.slice(5, 8)?.map((product) => (
          <Col>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
      <Row>
        {products?.slice(8, 11)?.map((product) => (
          <Col>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
      <Poster />
      <Row>
        {products?.slice(11, products.length)?.map((product) => (
          <Col xs={4}>
            <Product product={product} key={product.id} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductList;
// ₹{Math.trunc(price * 79.47)}
