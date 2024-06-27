import React, { useContext } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import "./footer.css";
import { ProdactList } from "../store/store";
export const Footer = () => {
  let dressData;
  let ProdactContainer = useContext(ProdactList);
  if (ProdactContainer.products != undefined) {
    dressData = Object.values(ProdactContainer.products);
  }
  const result = ProdactContainer.products.filter(
    (ele) => ele.fields.alaaSiteContent == "AlaaSiteContent"
  );

  return (
    <>
      <footer>
        <div className="container">
          <div className="row justify-content-center align-items-start gap-3 ">
            <div className="col-md-3">
              <div className="logoFooterimg"></div>
              <p className=" footerP">{result[0].fields.footerParagraph}</p>
            </div>
            <div className="col-md-3 ourProdacts  d-flex flex-column justify-content-start align-items-start align-items-md-center  ">
              <h5>Our Prodacts</h5>
              <ul className="  d-flex justify-content-start align-items-start p-0 flex-column">
                <Link
                  to="/classic"
                  className=" text-decoration-none footerLink w-100"
                >
                  <li className="rounded">
                    SOIREE WEAR <FaLongArrowAltRight />
                  </li>
                </Link>
                <Link
                  to="/casual"
                  className=" w-100 text-decoration-none footerLink"
                >
                  <li className=" rounded">
                    CASUAL WEAR <FaLongArrowAltRight />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="Social col-md-3 text-white">
              <h5>Our Social Media</h5>
              <div className="SocialIcons  d-flex  gap-2  ">
                <div>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556277818708&mibextid=ZbWKwL"
                    target="_blank"
                  >
                    {" "}
                    <FaFacebook />
                  </a>
                </div>
                <a
                  href="https://www.instagram.com/alaa_khaled_fashion_designer_?igsh=cHdwaTVxMWo3aHY4"
                  target="_blank"
                >
                  <IoLogoInstagram />
                </a>
                <a href="https://wa.me/01500974437" target="_blank">
                  <IoLogoWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="karim text-center">
          <div>
            This Website was designed and implemented by Dev Karim, 2024.
          </div>
          <div>
            @ Follow on{" "}
            <a href="https://www.linkedin.com/in/karimmagdy96" target="_blank">
              LinkedIn.
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
