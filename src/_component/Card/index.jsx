import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Card.scss";


class Card extends Component {
  render() {
    const { id, cover, title, location } = this.props;
    return (
      <>
        <article className="card-body">
          <Link to={`/housing/${id}`}>
            <img className="card-image" src={cover}
                 alt={`Une location située en ${location}`}
                 onClick={() => window.scrollTo(0, 0)}
            />
            <p className="card-title">{title}</p>
          </Link>
        </article>
      </>
    );
  }
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string,
  location: PropTypes.string
};

Card.defaultProps = {
  title: "titre de la \n location"
};

export default Card;