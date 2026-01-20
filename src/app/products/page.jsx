import Products from "@/components/home/Products";
import React from "react";

export const metadata = {
  title: "All Products",
  description: "Best Toy Store for Kids - Hero Kidz",
};

const ProductPage = () => {
  return (
    <div>
      <Products></Products>
    </div>
  );
};

export default ProductPage;
