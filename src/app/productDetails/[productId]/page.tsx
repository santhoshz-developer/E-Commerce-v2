"use client";
import ProductDetails from "@/page-component/productDetails/productDetails";
import { useParams } from "next/navigation";
import React from "react";

const Product = () => {
  const id = useParams();
  console.log("productId", id);

  return (
    <div>
      <ProductDetails />
    </div>
  );
};

export default Product;
