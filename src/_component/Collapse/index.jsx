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
        <div className="collapse-block">
          <div onClick={this.updateIsOpen} className="collapse">
            <h2 className="collapse-header">
              {this.props.title}
            </h2>
            <span style={{ fontSize: 28 }} className={collapseIcon} />
          </div>
          <div className={`collapse-hidden ${this.state.isOpen ? "is-open" : "is-close"}`}>
            <p>{this.props.textArray}</p>
          </div>
        </div>
      </>
    );
  }
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  textArray: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Collapse;