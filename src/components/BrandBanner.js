import React from "react";
import { Link } from "react-router-dom";
import brandbannerImage from "../pic/brand-banner.png";

const BrandBanner = () => (
  <div className="Brandbanner">
    <img src={brandbannerImage} alt="banner" />
    <div className="text">
      <Link className="nav-brand" to="/">
        THE
        <span>BRAND</span>
      </Link>

      <p>COMPANY SLOGAN LOGO GOES HERE</p>
    </div>
  </div>
);

export default BrandBanner;
