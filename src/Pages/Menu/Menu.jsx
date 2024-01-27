import React from "react";
import { Helmet } from "react-helmet-async";

import SectionTitle from "../../Components/SectionTitle";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useMenu";
import Cover from "../Shared/Cover/Cover";
import MenuCategory from "./MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  return (
    <div>
      <Helmet>
        <title>Spice Street | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        des="Would you like to try a dish?"
        title="our menu"
      />
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER" />
      <MenuCategory items={offered} />

      <MenuCategory
        items={desserts}
        title="dessert"
        img={dessertImg}
        des="Lorem Ipsum has  the 1500s, when an   galley of  scrambled it to make a type specimen book."
      ></MenuCategory>
      <MenuCategory
        items={pizza}
        title={"pizza"}
        img={pizzaImg}
        des="Lorem Ipsum has been the industry’s  unknown   scrambled it to make a type specimen book."
      ></MenuCategory>
      <MenuCategory
        items={salad}
        title={"salad"}
        img={saladImg}
        des="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s "
      ></MenuCategory>
      <MenuCategory
        items={soup}
        title={"soup"}
        img={soupImg}
        des="    when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ></MenuCategory>
    </div>
  );
};

export default Menu;
