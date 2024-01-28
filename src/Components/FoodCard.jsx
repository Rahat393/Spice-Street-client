import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ">
        <figure className="  ">
          <img src={image} alt="Shoes" className=" h-60 w-full " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"> {name}</h2>
          <p>{recipe}</p>
          <div className="card-actions">
            <button className="btn border-b-yellow-600 text-yellow-600 border-b-2">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
