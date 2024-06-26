import React from "react";

import { register } from "swiper/element/bundle";

export const Carosel = (props) => {
  register();
  return (
    <div className="">
      <swiper-container pagination="true">
        <swiper-slide>
          <div className="carsouelImgContainer w-100  d-flex justify-content-center align-items-center">
            <img
              className="  h-100 w-100  caaroselImg rounded"
              src={props.img1}
              alt={props.alt}
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="carsouelImgContainer w-100  d-flex justify-content-center align-items-center">
            <img
              loading="lazy"
              className=" w-100 h-100 w-100 rounded"
              src={props.img2}
              alt={props.alt}
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div className="carsouelImgContainer w-100  d-flex justify-content-center align-items-center ">
            <img
              loading="lazy"
              className="w-100  h-100 rounded"
              src={props.img3}
              alt={props.alt}
            />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};
