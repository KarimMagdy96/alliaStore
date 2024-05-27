import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Carosel } from "./../carosel/Carosel";
import { BsWhatsapp } from "react-icons/bs";

export const Home = () => {
  let carsoulImg = [
    {
      imgUrl1: "imgs/dress3.jpeg",
      imgUrl2: "imgs/dress3-1.jpeg",
      imgUrl3: "imgs/dress3-2.jpeg",
      id: "1001",
      des: "الخامة : ستان ارمانى",
      SiZe: "M",
    },
    {
      imgUrl2: "imgs/dress1-1.jpeg",
      imgUrl1: "imgs/dress1.jpeg",
      imgUrl3: "imgs/dress1-2.jpeg",
      id: "1002",
      des: "الخامة : ستان حرير مشجر ",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-2.jpeg",
      imgUrl2: "imgs/dress-2-1.jpeg",
      imgUrl3: "imgs/dress2-2.jpeg",
      id: "1003",
      des: "الكارديجان الخامة: كريب رويال ",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress4-1.jpeg",
      imgUrl2: "imgs/dress4-2.jpeg",
      imgUrl3: "imgs/drees-4.jpeg",
      id: "1003",
      des: "الخامه : سى واى مطرز",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-5.jpeg",
      imgUrl2: "imgs/dress5-1.jpeg",
      imgUrl3: "imgs/dress5-2.jpeg",
      id: "1003",
      des: "الخامه  : كريب رويال و بلوز روزالين",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-6.jpeg",
      imgUrl2: "imgs/dress6-1.jpeg",
      imgUrl3: "imgs/dress6-2.jpeg",
      id: "1003",
      des: "الخامه : ستان صالونه مع كافيار",
      SiZe: "M",
    },
  ];

  return (
    <section>
      <article className="heroSection w-100 overflow-hidden">
        <div className="container-fluid px-3 px-md-5 ">
          <div className="row  ">
            <div className="col-md-7 order-md-first order-last  d-flex justify-content-center  align-items-center  ">
              <div className="heroText ">
                <h2>be elegant with me</h2>
                <p>look your best in unique clothing made just for you.</p>
                <Link to="/casual" className="heroBtn">
                  See Our Collection <FaArrowRightLong className="aroowIcon" />
                </Link>
              </div>
            </div>
            <div className="col-md-5 heroImg  mt-1 d-flex justify-content-center  px-2  ">
              <img className="w-100" src="imgs/alla.png" alt="alla " />
            </div>
          </div>
        </div>
      </article>
      <article className="ourCollection">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-6">
              <div className="ourCategory casual">
                <Link
                  to="/casual"
                  className="ourCategoryText text-decoration-none"
                >
                  <h3>WOMAN</h3>
                  <h6>CASUAL WEAR</h6>
                  <a href="">View collection</a>
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="ourCategory classic">
                <Link
                  to="/classic"
                  className="ourCategoryText text-decoration-none"
                >
                  <h3>WOMAN</h3>
                  <h6>ClASSIC WEAR</h6>
                  <a href="">View collection</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article id="newArrive" className="newArrive sectionPadding">
        <div className="container">
          <h2>NEW ARRIVALS</h2>
          <div className="container pt-4">
            <div className="row justify-content-center align-items-center ">
              {carsoulImg.map((item, i) => {
                return (
                  <Link
                    key={i}
                    className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block text-decoration-none"
                  >
                    <Carosel
                      img1={`${item.imgUrl1}`}
                      img2={`${item.imgUrl2}`}
                      img3={`${item.imgUrl3}`}
                    />

                    <div className="prodactName  pt-2 pb-3   ">
                      <div className=" size ">{`${item.SiZe}`}</div>
                      <div className="  w-100 text-end">{`${item.des}`}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </article>
      <article className=" aboutMe sectionPadding">
        <div className=" container">
          <h2 className=" sectionHeading mb-5">ABOUT ME</h2>
          <div className="row">
            <div className="  col-md-6 d-flex justify-content-center align-items-center order-last  order-md-first">
              <div className="textContent  ">
                <h1 className=" mb-4 aboutHeading  mt-4">
                  Welcome to Ak Fashion Designer!{" "}
                </h1>
                <p>
                  I'm Alaa the creative mind behind the brand. My journey into
                  the world of fashion began in 2021, driven by a passion for
                  design and a love for creating unique, stylish clothing. With
                  a focus on blending timeless elegance with contemporary
                  trends, I strive to design pieces that make a statement and
                  empower individuals to express their personal style.
                </p>
              </div>
            </div>
            <div className=" col-md-6  d-flex justify-content-center align-items-center">
              <div className="box-images ">
                <div
                  className="box-images-item box-images-1"
                  data-parallax-scroll='{"y": 20, "x": 30,  "smoothness": 30 }'
                >
                  <img
                    src="imgs/WhatsApp Image 2024-05-17 at 10.08.30 PM.jpeg"
                    alt
                    width={219}
                    height={292}
                  />
                </div>
                <div
                  className="box-images-item box-images-2"
                  data-parallax-scroll='{"y": 20,  "smoothness": 30 }'
                >
                  <img
                    src="imgs/WhatsApp Image 2024-05-17 at 10.09.09 PM.jpeg"
                    alt
                    width={219}
                    height={329}
                  />
                </div>
                <div
                  className="box-images-item box-images-3"
                  data-parallax-scroll='{"y": 20, "x": -30, "smoothness": 30 }'
                >
                  <img
                    src="imgs/WhatsApp Image 2024-05-17 at 10.08.37 PM.jpeg"
                    alt
                    width={219}
                    height={319}
                  />
                </div>
                <div
                  className="box-images-item box-images-4"
                  data-parallax-scroll='{"y": -20,  "smoothness": 30 }'
                >
                  <img
                    src="imgs/WhatsApp Image 2024-05-17 at 10.08.58 PM.jpeg"
                    alt
                    width={216}
                    height={216}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article
        id="orderNow"
        className="orderNow position-relative   overflow-hidden"
      >
        <div className="orderText">
          <h4> Place Your Order Now !</h4>
          <a href="https://wa.me/01500974437" target="_blank">
            Continue to{" "}
            <span className=" h4 ms-1 text-success">
              <BsWhatsapp />
            </span>
          </a>
        </div>
        <div className="orderimg">
          <img className=" w-100 imgggg" src="imgs/order.jpg" alt="" />
        </div>
      </article>
      <article className=" followUs">
        <div className="container">
          <div className="followUsHeader">
            <h4>
              <a
                href="https://www.instagram.com/alaa_khaled_fashion_designer_?igsh=cHdwaTVxMWo3aHY4"
                target="_blank"
              >
                @ FOLLOW
              </a>
              US ON INSTAGRAM
            </h4>
            <h5>shop our instagram</h5>
          </div>
          <a
            href="https://www.instagram.com/alaa_khaled_fashion_designer_?igsh=cHdwaTVxMWo3aHY4"
            target="_blank"
            className="followUsContent d-block mt-4 "
          >
            <div className="row">
              <div className="col-6 col-lg-2 mb-4 ">
                <img className="w-100 h-100" src="imgs/ins (1).png" alt="" />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img className="w-100 h-100" src="imgs/ins (2).png" alt="" />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img className="w-100 h-100" src="imgs/ins (3).png" alt="" />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img className="w-100 h-100" src="imgs/ins (4).png" alt="" />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img className="w-100 h-100" src="imgs/ins (5).png" alt="" />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img className="w-100 h-100" src="imgs/ins (6).png" alt="" />
              </div>
            </div>
          </a>
        </div>
      </article>
    </section>
  );
};
