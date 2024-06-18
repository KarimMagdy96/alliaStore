import React, { useContext } from "react";
import "./classic.css";
import { Carosel } from "./../carosel/Carosel";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { ProdactList } from "../store/store";
export const Classic = () => {
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
            initial={{ scale: 0.9 }}
            whileInView={{
              scale: 1,
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
                          initial={{ scale: 0.9 }}
                          whileInView={{
                            scale: 1,
                            transition: { delay: 0.2, duration: 0.5 },
                          }}
                          viewport={{ once: false, amount: 0.5 }}
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
        </div>
      </div>
    </section>
  );
};
