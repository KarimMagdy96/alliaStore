import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";
export const Navbar = () => {
  let [popMenuOpen, setpopMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  function handleResponsiveClick() {
    setpopMenuOpen(!popMenuOpen);
    if (popMenuOpen) {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  }
  function closeMenu() {
    setpopMenuOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <nav className={scrolling ? "navbar-scroll shadow" : ""}>
      <div className="navContent">
        <Link to="/home">
          <img className="storeImg" src="/imgs/storeIcon.png" alt="LuliiIcon" />
        </Link>
        <div className="links">
          <ul className={`popmenu ${popMenuOpen ? "navLinks" : ""}`}>
            <li>
              <Link onClick={closeMenu} to="/home">
                HOME
              </Link>
            </li>

            <li>
              <Link onClick={closeMenu} to="/casual">
                CASUAL WEAR
              </Link>
            </li>
            <li>
              <Link onClick={closeMenu} to="/classic">
                SOIREE WEAR
              </Link>
            </li>
          </ul>
          <div className="humurger_icon " onClick={handleResponsiveClick}>
            <CiMenuFries />
          </div>
        </div>
      </div>
    </nav>
  );
};
