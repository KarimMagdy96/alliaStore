import React from "react";
// import function to register Swiper custom elements
import { register } from "swiper/element/bundle";
// register Swiper custom elements

export const Carosel = (props) => {
  register();
  return (
    <div className="">
      <swiper-container pagination="true">
        <swiper-slide>
          <div className="carsouelImgContainer w-100  d-flex justify-content-center align-items-center">
            <img
              className="  h-100 w-100  caaroselImg"
              src={props.img1}
              alt=""
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="carsouelImgContainer w-100  d-flex justify-content-center align-items-center">
            <img className=" w-100 h-100 w-100" src={props.img2} alt="" />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="carsouelImgContainer w-100  d-flex justify-content-center align-items-center">
            <img className="w-100  h-100" src={props.img3} alt="" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
