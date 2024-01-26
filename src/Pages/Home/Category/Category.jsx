import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import slider1 from "../../../assets/home/slide1.JPG";
import slider2 from "../../../assets/home/slide2.JPG";
import slider3 from "../../../assets/home/slide3.JPG";
import slider4 from "../../../assets/home/slide4.JPG";
import slider5 from "../../../assets/home/slide5.JPG";
import SectionTitle from "../../../Components/SectionTitle";

const Category = () => {
  return (
    <>
      <SectionTitle
        subHeading={"---From 11:00am to 10:00pm---"}
        heading={"ORDER ONLINE"}
      ></SectionTitle>
      <section className=" lg:ml-16 ">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper  "
        >
          <SwiperSlide>
            <img src={slider1} alt="" />
            <h3 className="md:text-4xl lg:ml-16 lg:-mt-16 uppercase text-2xl ml-6 -mt-10 text-white ">
              Salads
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
            <h3 className="md:text-4xl lg:ml-16 lg:-mt-16 uppercase text-2xl ml-6 -mt-10 text-white ">
              pizzas
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
            <h3 className="md:text-4xl lg:ml-16 lg:-mt-16 uppercase text-2xl ml-6 -mt-10 text-white ">
              soups
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
            <h3 className="md:text-4xl lg:ml-16 lg:-mt-16 uppercase text-2xl ml-6 -mt-10 text-white ">
              desserts
            </h3>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slider5} alt="" />
            <h3 className="md:text-4xl lg:ml-16 lg:-mt-16 uppercase text-2xl ml-6 -mt-10 text-white ">
              Salads
            </h3>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default Category;
