import React, { Component } from "react";
import logoWhite from "../../assets/images/logoWhite.svg";
import "./Footer.scss";


class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <img style={{
            height: 40
          }} src={logoWhite} alt="logo kasa" />
          <p className="text-copyrights">© 2020 Kasa. All rights reserved</p>
        </div>
      </>
    );
  };
}

export default Footer;