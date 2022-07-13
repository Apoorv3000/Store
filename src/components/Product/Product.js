import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({
  product: { id, image, title, price, category, rating, description },
}) => {
  return (
    <div>
      <Card
        style={{ width: "100%", padding: "20px", height: "540px" }}
        className="shadow rounded-3 d-flex mb-5 flex-column"
      >
        <Card.Text className="opacity-50 fst-italic">{category}</Card.Text>
        <Card.Img
          variant="top"
          className="d-flex justify-content-center"
          src={image}
          width={200}
          height={200}
          style={{ objectFit: "contain" }}
        />
        <Card.Body>
          <Card.Title className="fw-bold lh-sm mb-3">{title}</Card.Title>
          <Card.Text className="mb-2 fs-3">
            <span className="fs-4">₹</span>
            {Math.trunc(price * 79.47)}
          </Card.Text>
          <Card.Text>{rating.rate}</Card.Text>
        </Card.Body>
        <Button variant="danger">Add To Cart</Button>
      </Card>
    </div>
  );
};

export default Product;
