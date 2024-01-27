import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../../Components/MenuItem";
import Cover from "../../Shared/Cover/Cover";

const MenuCategory = ({ items, title, img, des }) => {
  return (
    <div className="pt-8">
      {title && <Cover img={img} title={title} des={des}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link className="flex  justify-center" to={`/order/${title}`}>
        <button className="btn btn-outline  border-0 border-b-4 mt-4">
          ORDER YOUR FAVOURITE FOOD
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
