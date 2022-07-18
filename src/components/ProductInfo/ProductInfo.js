import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/fakeStore";

const ProductInfo = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProduct(id)
      .then((data) => {
        console.log(data);
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const Loading = () => {
    return (
      <div
        className=" spinner-border text-danger d-flex justify-content-center align-items-center"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  };
  return (
    <Container className="mt-5">
      <Row>
        {loading ? (
          <Loading />
        ) : (
          <>
            <Col md={6} className="mb-2">
              <img
                src={product?.image}
                height="400px"
                width="400px"
                alt={product?.title}
                style={{ objectFit: "contain" }}
              />
            </Col>
            <Col md={6}>
              <h4 className="text-uppercase text-black-50">
                {product?.category}
              </h4>
              <h1 className="display-5">{product?.title}</h1>
              <p className="lead">
                Rating {product?.rating && product.rating.rate}
                <FontAwesomeIcon
                  icon={solid("star")}
                  className="sm text-danger"
                />
              </p>
              <h3 className="display-6 fw-bold my-4">
                ₹{Math.trunc(product?.price * 79.47)}
              </h3>
              <p className="lead">{product?.description}</p>
              <button className="btn btn-danger fw-bold me-4">Buy Now</button>
              <button className="btn btn-outline-danger fw-bold">
                Add to cart
              </button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default ProductInfo;
