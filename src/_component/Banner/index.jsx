import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Banner.scss";


class Banner extends Component {
  render() {
    return (
      <>
        <div className="hero-banner">
          <img src={this.props.imgSource} alt={this.props.altText} />
          <h3>{this.props.title}</h3>
        </div>
      </>
    );
  }
}

Banner.propTypes = {
  imgSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string
};

export default Banner;