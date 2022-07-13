import React, { useEffect, useState } from "react";
import { getAllProducts } from "../services/fakeStore";
import { ProductList } from "..";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllProducts().then((data) => {
      setProducts(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default Products;
