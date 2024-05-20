import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY } from "@/service/query";
import Brand from "./helper-component/brand/Brand";
import Intro from "./helper-component/IntroPage/IntroPage";
import Products from "./helper-component/products/Products";
import { Banner } from "./helper-component/banner/Banner";
import Seller from "./helper-component/seller/Seller";
import { Follow } from "./helper-component/follow/Follow";

const HomePage = () => {
  const { data } = useQuery(QUERY);
  const { homes } = data || {};
  const {
    topmain,
    brands,
    categorey,
    productitems,
    brandbanner,
    silderproduct,
    feedback,
  } = homes?.data?.[0]?.attributes || {};

  return (
    <div>
      <Intro {...topmain} />
      <Brand brands={brands} categorey={categorey} />
      <Products {...productitems} />
      <Banner {...brandbanner} />
      <Seller {...silderproduct} />
      <Follow {...feedback} />
    </div>
  );
};

export default HomePage;
