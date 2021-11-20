import React from "react";
import logoWhite from '../../assets/images/logoWhite.svg';
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <img style={{height: 40}} src={logoWhite} alt="logo kasa" />
        <p className="text-copyrights">© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;