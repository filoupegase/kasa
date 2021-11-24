import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";


class Card extends Component {

  render() {
    return (
      <>
          <article className="card-body">
            <Link to="/">
            <img className="card-image" src={this.props.imgSource} alt={this.props.altText} />
            <p className="card-title">{this.props.title}</p>
            </Link>
          </article>
      </>
    );
  }
}

Card.propTypes = {
  imgSource: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Card;