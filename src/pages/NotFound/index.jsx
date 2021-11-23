import React, { Component } from "react";
import "./NotFound.scss";


class NotFound extends Component {
  render() {
    return (
      <>
        <div className="container-not-found">
          <h1 className="big-error">404</h1>
          <h2>Oups! La page de que vous demander n'existe pas</h2>
        </div>
      </>
    );
  }
}

export default NotFound;