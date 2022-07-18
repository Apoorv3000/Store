import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({
  product: { id, image, title, price, category, rating, description },
}) => {
  return (
    <div>
      <Link
        to={`/products/${id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Card
          style={{ width: "100%", padding: "20px" }}
          className="shadow rounded-3 d-flex mb-5 flex-column h-100"
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
            <Card.Title className="fw-bold lh-sm mb-3">
              {title.substring(0, 13)}
            </Card.Title>
            <Card.Text className="mb-2 fs-3">
              <span className="fw-bold fs-4">₹</span>
              {Math.trunc(price * 79.47)}
            </Card.Text>
            <Card.Text>
              <div className="d-flex align-items-center">
                <div className="me-2">
                  {Array(Math.trunc(rating.rate))
                    .fill()
                    .map((_, id) => (
                      <FontAwesomeIcon
                        icon={solid("star")}
                        className="sm text-danger"
                      />
                    ))}
                </div>
                <div>{rating.rate}</div>
              </div>
            </Card.Text>
          </Card.Body>
          <Button variant="danger" className="fw-bold">
            Add To Cart
          </Button>
        </Card>
      </Link>
    </div>
  );
};

export default Product;
