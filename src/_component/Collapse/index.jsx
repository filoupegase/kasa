import React, { Component } from "react";
import PropTypes from "prop-types";


class Collapse extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const collapseIcon = "fas fa-chevron-down";
    return (
      <>
        <h2>
          <span>{this.props.title}</span>
          <span className={collapseIcon}></span>
        </h2>
        <p>{this.props.textArray}</p>
      </>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.string.isRequired
};

export default Collapse;