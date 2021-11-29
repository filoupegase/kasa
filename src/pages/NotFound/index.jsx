import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";


class NotFound extends Component {
  render() {
    return (
      <>
        <div className="container-not-found">
          <h1 className="big-error">404</h1>
          <h2
            style={{ marginBottom: 130 }}
          >Oups! La page de que vous demander n'existe pas</h2>
          <div
            style={{ marginBottom: 130 }}
          >
            <Link
              className="link-to"
              to={"/"}
            >Retourner sur la page d'acceuil
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default NotFound;