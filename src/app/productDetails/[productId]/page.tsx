"use client";
import ProductDetails from "@/page-component/productDetails/productDetails";
import { useParams } from "next/navigation";
import React from "react";

const Product = () => {
  const { productId } = useParams();
  console.log("productId", productId);

  return (
    <div>
      <ProductDetails productId={productId} />
    </div>
  );
};

export default Product;
