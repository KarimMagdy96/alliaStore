import React, { useContext } from "react";
import "./casual.css";
import { motion } from "framer-motion";
import { Carosel } from "./../carosel/Carosel";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ProdactList } from "../store/store";
export const Casual = () => {
  let dressData;
  let ProdactContainer = useContext(ProdactList);
  if (ProdactContainer.products != undefined) {
    dressData = Object.values(ProdactContainer.products);
  }
  console.log(dressData);
  return (
    <section className=" casualPage overflow-hidden">
      <Helmet>
        <title>CASUAL WEAR</title>
        <meta name="description" content="CASUAL WEAR" />
      </Helmet>
      <div className="container ">
        <div className="casualCollection">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,

              transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="ourCategory casual"
          >
            <div to="/casual" className="ourCategoryText text-decoration-none">
              <h3>CASUAL WEAR</h3>
              <div className="Navigator">
                CASUAL WEAR /{" "}
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
                    item.fields.category === "CA" && (
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
