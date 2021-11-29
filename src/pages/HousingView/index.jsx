import React, { Component } from "react";
import Caroussel from "../../_component/Caroussel";
import NotFound from "../NotFound";


class HousingView extends Component {
  render() {
    const { id, advertisementsList } = this.props;
    const advertisementToDisplay = advertisementsList.findById(id);
    const ad = advertisementToDisplay;

    if (!advertisementToDisplay) {
      return <NotFound />;
    }

    return (
      <>
        <Caroussel />
        <h2>{ad.title}</h2>
      </>
    );
  }
}

export default HousingView;