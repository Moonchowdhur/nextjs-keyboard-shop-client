"use client";
import { useState } from "react";
import ProductCard from "./productCard";

const ProductCards = ({ product, fetchData }:any) => {
  const [pro, setPro] = useState(product);

  async function fetchProduct() {
    const ud = await fetchData();
    setPro(ud);
  }

  return (
    <tbody>
      {pro?.data.map((item: any) => (
        <ProductCard fetchProduct={fetchProduct} key={item._id} item={item} />
      ))}
      {/*  */}
    </tbody>
  );
};

export default ProductCards;
