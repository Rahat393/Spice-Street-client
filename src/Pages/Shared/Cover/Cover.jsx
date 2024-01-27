import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, des }) => {
  return (
    <Parallax
      blur={{ min: -100, max: 80 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero lg:h-[500px] h-[300px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content   ">
          <div className="max-w-md bg-black   py-10 px-20    opacity-50">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">{des}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;