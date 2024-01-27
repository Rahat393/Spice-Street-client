import React from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ChefRec from "../ChefRec/ChefRec";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import SpiceSec from "../SpiceSec/SpiceSec";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Spice Street | Menu</title>
      </Helmet>
      <Banner />
      <Category />
      <SpiceSec />
      <PopularMenu />
      <Featured />
      <ChefRec />
      <Testimonials />
    </div>
  );
};

export default Home;
