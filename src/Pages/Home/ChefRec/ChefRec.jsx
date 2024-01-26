import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import cardImg from "../../../assets/home/slide5.jpg";

const ChefRec = () => {
  return (
    <section>
      <SectionTitle subHeading="---Should Try---" heading="CHEF RECOMMENDS" />
      <div className="lg:grid grid-cols-3 my-16">
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="  ">
            <img src={cardImg} alt="Shoes" className=" h-60 w-full " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn border-b-yellow-600 text-yellow-600 border-b-2">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="  ">
            <img src={cardImg} alt="Shoes" className=" h-60 w-full " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn border-b-yellow-600 text-yellow-600 border-b-2">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl ">
          <figure className="  ">
            <img src={cardImg} alt="Shoes" className=" h-60 w-full " />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title"> Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn border-b-yellow-600 text-yellow-600 border-b-2">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefRec;
