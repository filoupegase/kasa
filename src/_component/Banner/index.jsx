import React, { Component } from "react";
import PropTypes from "prop-types";


class Banner extends Component {
  render() {
    return (
      <p>{this.props.title}</p>
    );
  }
}

Banner.propTypes = {
  title: PropTypes.string
};

export default Banner;