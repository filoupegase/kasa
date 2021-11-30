import React, { Component } from "react";
import Caroussel from "../../_component/Caroussel";
import NotFound from "../NotFound";


class HousingView extends Component {
  render() {
    const { id, advertisementsList } = this.props;
    const advertisementToDisplay = advertisementsList.findById(id);
    const housing = advertisementToDisplay;
    console.log(housing);

    if (!advertisementToDisplay) {
      return <NotFound />;
    }

    return (
      <>
        <Caroussel />
        <h2>{housing.title}</h2>
      </>
    );
  }
}

export default HousingView;