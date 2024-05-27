import React from "react";
import "./casual.css";
import { Carosel } from "./../carosel/Carosel";
import { Link } from "react-router-dom";
export const Casual = () => {
  let carsoulImg = [
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
      imgUrl1: "imgs/dress-7.jpeg",
      imgUrl2: "imgs/dress-7-1.jpeg",
      imgUrl3: "imgs/dress-7-2.jpeg",
      id: "1003",
      des: "الخامه : كريب رويال",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-8.jpeg",
      imgUrl2: "imgs/dress-8-1.jpeg",
      imgUrl3: "imgs/dress-8-2.jpeg",
      id: "1003",
      des: "خامه : كروهات شتوي",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-9.jpeg",
      imgUrl2: "imgs/dress-9.jpeg",
      imgUrl3: "imgs/dress-9.jpeg",
      id: "1003",
      des: "الخامه : ريب",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-10.jpeg",
      imgUrl2: "imgs/dress-10-1.jpeg",
      imgUrl3: "imgs/dress-10.jpeg",
      id: "1003",
      des: "الخامه : شتوى مخطط",
      SiZe: "M",
    },
    {
      imgUrl2: "imgs/dress-11.jpeg",
      imgUrl1: "imgs/dress-11-1.jpeg",
      imgUrl3: "imgs/dress-11-1.jpeg",
      id: "1003",
      des: "الخامه : كريب حرير",
      SiZe: "M",
    },
    {
      imgUrl1: "imgs/dress-12.jpg",
      imgUrl2: "imgs/dress-12-1.jpeg",
      imgUrl3: "imgs/dress-12-2.jpeg",
      id: "1003",
      des: "الخامه : كريب حرير",
      SiZe: "M",
    },
  ];
  return (
    <section className=" casualPage ">
      <div className="container ">
        <div className="casualCollection">
          <div className="ourCategory casual">
            <div to="/casual" className="ourCategoryText text-decoration-none">
              <h3>CASUAL WEAR</h3>
              <div className="Navigator">
                CASUAL WEAR /{" "}
                <span>
                  <Link to="/home">Home</Link>
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="collectionCards">
          <div className="container">
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
        </div>
      </div>
    </section>
  );
};
