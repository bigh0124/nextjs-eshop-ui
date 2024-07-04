import React from "react";
import Slider from "../components/Slider";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";

const Home = () => {
  return (
    <div>
      <Slider />
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl text-center">Feature Product</h1>
        <ProductList />
      </div>
      <div className="mt-24">
        <h1 className="text-2xl text-center">Categories</h1>
        <CategoryList />
      </div>
    </div>
  );
};

export default Home;
