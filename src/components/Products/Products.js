import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/fakeStore";
import { ProductList } from "..";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllProducts()
      .then((data) => {
        setLoading(true);
        setProducts(data);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
    <div>{loading ? <Loading /> : <ProductList products={products} />}</div>
  );
};

export default Products;
