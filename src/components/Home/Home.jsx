import React, { useContext } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { Carosel } from "./../carosel/Carosel";
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { ProdactList } from "./../store/store";

export const Home = () => {
  let dressData;
  let ProdactContainer = useContext(ProdactList);
  if (ProdactContainer.products != undefined) {
    dressData = Object.values(ProdactContainer.products);
  }
  console.log(dressData);
  return (
    <section className="  overflow-hidden">
      <Helmet>
        <title>Lulii’s Fashion Home</title>
        <meta name="description" content="Home Page" />
      </Helmet>
      <article className="heroSection w-100 overflow-hidden">
        <div className="container-fluid px-3 px-md-5 ">
          <div className="row  ">
            <div className="col-md-7 order-md-first order-last  d-flex justify-content-center  align-items-center  ">
              <div className="heroText ">
                <motion.h2
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {dressData[0].fields.mainSubTitle}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {dressData[0].fields.mainTitle}
                </motion.p>
                <Link to="/casual" className="heroBtn">
                  See Our Collection <FaArrowRightLong className="aroowIcon" />
                </Link>
              </div>
            </div>
            <div className="col-md-5 heroImg  mt-1 d-flex justify-content-center  px-2  ">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,

                  transition: { delay: 0.2, duration: 0.5 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="w-100"
                src={dressData[0].fields.mainPhoto.fields.file.url}
                alt="alla "
              />
            </div>
          </div>
        </div>
      </article>
      <article className="ourCollection">
        <div className="container-fluid px-4">
          <div className="row">
            <div className="col-md-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{
                  opacity: 1,
                  transition: { delay: 0.1, duration: 0.3 },
                }}
                viewport={{ once: false, amount: 0.5 }}
                className="ourCategory  casual"
              >
                <Link
                  to="/casual"
                  className="ourCategoryText text-decoration-none"
                >
                  <motion.h3>WOMAN</motion.h3>
                  <motion.h6>CASUAL WEAR</motion.h6>
                  <Link to="/casual">View collection</Link>
                </Link>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { delay: 0.1, duration: 0.3 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="col-md-6"
            >
              <div className="ourCategory classic">
                <Link
                  to="/classic"
                  className="ourCategoryText text-decoration-none"
                >
                  <h3>WOMAN</h3>
                  <h6>SOIREE WEAR</h6>
                  <Link to="/classic">View collection</Link>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
      <article id="newArrive" className="newArrive sectionPadding">
        <div className="container">
          <h2>NEW ARRIVALS</h2>
          <div className="container pt-4">
            <div className="row justify-content-center align-items-center ">
              {dressData.map((item, i) => {
                return (
                  item.fields.new === true && (
                    <Link
                      key={i}
                      className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block text-decoration-none"
                    >
                      <motion.div
                        initial={{ scale: 0.9 }}
                        whileInView={{
                          scale: 1,

                          transition: { delay: 0.1, duration: 0.3 },
                        }}
                        viewport={{ once: false }}
                      >
                        <Carosel
                          img1={`${item.fields.img1.fields.file.url}`}
                          img2={`${item.fields.img2.fields.file.url}`}
                          img3={`${item.fields.img3.fields.file.url}`}
                          alt={`${item.fields.title}`}
                        />
                      </motion.div>

                      <div className="prodactName  pt-2 pb-3   ">
                        <div className=" size ">{`${item.fields.size}`}</div>
                        <div className="  w-100 text-end">{`${item.fields.title}`}</div>
                      </div>
                    </Link>
                  )
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
                <motion.h1
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                  className=" mb-4 aboutHeading  mt-4"
                >
                  {dressData[0].fields.aboutTitle}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 0.2, duration: 0.5 },
                  }}
                  viewport={{ once: false, amount: 0.5 }}
                >
                  {dressData[0].fields.aboutParagraph}
                </motion.p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.1, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className=" col-md-6  d-flex justify-content-center align-items-center"
            >
              <div className="box-images ">
                <div
                  className="box-images-item box-images-1"
                  data-parallax-scroll='{"y": 20, "x": 30,  "smoothness": 30 }'
                >
                  <img
                    src={dressData[0].fields.aboutMeSection1.fields.file.url}
                    alt="alla Photo"
                    width={219}
                    height={292}
                  />
                </div>
                <div
                  className="box-images-item box-images-2"
                  data-parallax-scroll='{"y": 20,  "smoothness": 30 }'
                >
                  <img
                    src={dressData[0].fields.aboutMeSection.fields.file.url}
                    alt="alla Photo"
                    width={219}
                    height={329}
                  />
                </div>
                <div
                  className="box-images-item box-images-3"
                  data-parallax-scroll='{"y": 20, "x": -30, "smoothness": 30 }'
                >
                  <img
                    src={dressData[0].fields.aboutMeSection2.fields.file.url}
                    alt="alla Photo"
                    width={219}
                    height={319}
                  />
                </div>
                <div
                  className="box-images-item box-images-4"
                  data-parallax-scroll='{"y": -20,  "smoothness": 30 }'
                >
                  <img
                    src={dressData[0].fields.aboutMeSection3.fields.file.url}
                    alt="alla Photo"
                    width={216}
                    height={216}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>
      <article
        id="orderNow"
        className="orderNow position-relative   overflow-hidden"
      >
        <div className="orderText">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {" "}
            Place Your Order Now !
          </motion.h4>
          <a href="https://wa.me/01500974437" target="_blank">
            Continue to{" "}
            <span className=" h4 ms-1 text-success ">
              <BsWhatsapp />
            </span>
          </a>
        </div>
        <div className="orderimg">
          <img className=" w-100 imgggg" src="imgs/order.webp" alt="" />
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
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,

                transition: { delay: 0.2, duration: 0.5 },
              }}
              viewport={{ once: false, amount: 0.5 }}
              className="row"
            >
              <div className="col-6 col-lg-2 mb-4 ">
                <img
                  loading="lazy"
                  className="w-100 h-100"
                  src={dressData[0].fields.instegramPhoto.fields.file.url}
                  alt="alla instagram"
                />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img
                  loading="lazy"
                  className="w-100 h-100"
                  src={dressData[0].fields.instegramphoto1.fields.file.url}
                  alt="alla instagram"
                />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img
                  loading="lazy"
                  className="w-100 h-100"
                  src={dressData[0].fields.instegramphoto2.fields.file.url}
                  alt="alla instagram"
                />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img
                  loading="lazy"
                  className="w-100 h-100"
                  src={dressData[0].fields.instegramphoto3.fields.file.url}
                  alt="alla instagram"
                />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img
                  loading="lazy"
                  className="w-100 h-100"
                  src={dressData[0].fields.instegramphoto4.fields.file.url}
                  alt="alla instagram"
                />
              </div>
              <div className="col-6 col-lg-2 mb-4">
                <img
                  loading="lazy"
                  className="w-100 h-100"
                  src={dressData[0].fields.instegramphoto5.fields.file.url}
                  alt="alla instagram"
                />
              </div>
            </motion.div>
          </a>
        </div>
      </article>
    </section>
  );
};
