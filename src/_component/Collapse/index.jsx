import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Collapse.scss";


class Collapse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
    this.updateIsOpen = this.updateIsOpen.bind(this);
  }

  updateIsOpen() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    const collapseIcon = `fas fa-chevron-${this.state.isOpen ? "up" : "down"}`;
    return (
      <>
        <div className="collapse-header">
          <h2 style={{ margin: 0, fontWeight: 400 }}>
            {this.props.title}
          </h2>
          <span onClick={this.updateIsOpen} style={{ cursor: "pointer", fontSize: 28 }} className={collapseIcon} />
        </div>
        <div className="collapse-hidden">
          <p>{this.props.textArray}</p>
        </div>
      </>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.string.isRequired
};

export default Collapse;