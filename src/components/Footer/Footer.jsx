import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import "./footer.css";
export const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="logoFooterimg"></div>
              <p className=" footerP">
                In Ak Fashion Designer We Believe in creating unique, stylish
                clothing With a focus on blending timeless elegance with
                contemporary trends.
              </p>
            </div>
            <div className="col-md-4 ourProdacts  d-flex flex-column justify-content-start align-items-start align-items-md-center  ">
              <h5>Our Prodacts</h5>
              <ul className="  d-flex justify-content-start align-items-start p-0 flex-column">
                <Link
                  to="/classic"
                  className=" text-decoration-none footerLink w-100"
                >
                  <li>
                    SOIREE WEAR <FaLongArrowAltRight />
                  </li>
                </Link>
                <Link
                  to="/casual"
                  className=" w-100 text-decoration-none footerLink"
                >
                  <li className="">
                    CASUAL WEAR <FaLongArrowAltRight />
                  </li>
                </Link>
              </ul>
            </div>
            <div className="Social col-md-4 text-white">
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
      </footer>
      <div className="karim text-center">
        Made With ❤️ by{" "}
        <a href="https://www.linkedin.com/in/karimmagdy96/" target="_blank">
          Karim
        </a>{" "}
      </div>
    </>
  );
};
