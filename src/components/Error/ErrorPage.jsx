import React from "react";
import "./error.css";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section>
      <div>
        <section className="error-container">
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
          <span className="zero">
            <span className="screen-reader-text">0</span>
          </span>
          <span className="four">
            <span className="screen-reader-text">4</span>
          </span>
        </section>
        <div className="link-container">
          <Link to="/home" className="more-link">
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};
