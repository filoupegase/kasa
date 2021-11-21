import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";


class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render() {
    const collapseIcon = "fas fa-chevron-down";
    return (
      <>
        <div className="collapse">
          <h2 style={{ margin: 0, fontWeight: 400 }}>
            {this.props.title}
          </h2>
          <span style={{ height: 24, cursor: "pointer" }} className={collapseIcon} />
        </div>
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