import React, { useContext } from "react";
import "./classic.css";
import { Carosel } from "./../carosel/Carosel";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ProdactList } from "../store/store";
export const Classic = () => {
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
      imgUrl1: "imgs/dress-13.jpeg",
      imgUrl2: "imgs/dress-13-1.jpeg",
      imgUrl3: "imgs/dress-13-2.jpeg",
      id: "1003",
      des: "الخامه : سى واى مطرز",
      SiZe: "M",
    },

    {
      imgUrl1: "imgs/dress-14.jpeg",
      imgUrl2: "imgs/dress-14-1.jpeg",
      imgUrl3: "imgs/dress-14-2.jpeg",
      id: "1003",
      des: "الخامه : شيفون مع بطانه روزالين ",
      SiZe: "M",
    },

    {
      imgUrl1: "imgs/dress-15.jpeg",
      imgUrl2: "imgs/dress-15-1.jpeg",
      imgUrl3: "imgs/dress-15.jpeg",
      id: "1003",
      des: "الخامه : ستان صالونه",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-16.jpeg",
      imgUrl2: "imgs/dress-16.jpeg",
      imgUrl3: "imgs/dress-16.jpeg",
      id: "1003",
      des: "الخامه : شيفون منقوش مبطن",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-17.jpeg",
      imgUrl2: "imgs/dress-17.jpeg",
      imgUrl3: "imgs/dress-17.jpeg",
      id: "1003",
      des: "الخامه : قطيفه فرنساوى",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-18.jpeg",
      imgUrl2: "imgs/dress-18-1.jpeg",
      imgUrl3: "imgs/dress-18.jpeg",
      id: "1003",
      des: "الخامه : ستان صالونه",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-19.jpeg",
      imgUrl2: "imgs/dress-19-1.jpeg",
      imgUrl3: "imgs/dress-19.jpeg",
      id: "1003",
      des: "الخامه : ستان صالونه",
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
  let dressData;
  let ProdactContainer = useContext(ProdactList);
  if (ProdactContainer.products != undefined) {
    dressData = Object.values(ProdactContainer.products);
  }
  return (
    <section className=" ClassicPage overflow-hidden">
      <Helmet>
        <title>SOIREE WEAR</title>
        <meta name="description" content="CLASSIC WEAR" />
      </Helmet>
      <div className="container ">
        <div className="classicCollection">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="ourCategory classic"
          >
            <div to="/classic" className="ourCategoryText text-decoration-none">
              <h3>SOIREE WEAR</h3>
              <div className="Navigator">
                SOIREE WEAR /{" "}
                <span>
                  <Link to="/home">Home</Link>
                </span>{" "}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="collectionCards">
          <div className="container">
            <div className="container pt-4">
              <div className="row justify-content-center align-items-center ">
                {dressData.map((item, i) => {
                  return (
                    item.fields.category === "SO" && (
                      <Link
                        key={i}
                        className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-block text-decoration-none"
                      >
                        <motion.div
                          initial={{ opacity: 0, x: 50 }}
                          whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: { delay: 0.2, duration: 0.5 },
                          }}
                          viewport={{ once: false, amount: 0.5 }}
                        >
                          <Carosel
                            img1={`${item.fields.img1.fields.file.url}`}
                            img2={`${item.fields.img2.fields.file.url}`}
                            img3={`${item.fields.img3.fields.file.url}`}
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
        </div>
      </div>
    </section>
  );
};
