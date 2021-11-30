import React, { Component } from "react";
import Caroussel from "../../_component/Caroussel";
import NotFound from "../NotFound";
import Collapse from "../../_component/Collapse";
import "./HousingView.scss";


class HousingView extends Component {
  render() {
    const { id, advertisementsList } = this.props;
    const advertisementToDisplay = advertisementsList.findById(id);
    const housing = advertisementToDisplay;
    const ratingScale = [1, 2, 3, 4, 5];
    console.log(housing);

    if (!advertisementToDisplay) {
      return <NotFound />;
    }

    return (
      <>
        <main>
          <Caroussel />
          <section>
            <header>
              <h1>{housing.title}</h1>
              <p>{housing.location}</p>
              {housing.tags.map((tag) => (
                <span key={`tag-${tag}`}>
                    {tag}
                  </span>))}
              <p>{housing.host.name}</p>
              <img
                src={housing.host.picture}
                alt={housing.host.name}
              />
              <div className="housing_rating">
                {ratingScale.map((scale) => (
                  <i
                    className={`fas fa-star${
                      scale <= housing.rating ? " colored" : ""}`}
                    key={`star-${scale}`}
                  />
                ))}
              </div>
            </header>
            <Collapse title="description" textArray={[housing.description]} />
            <Collapse title="equipments" textArray={housing.equipments} />
          </section>
        </main>
      </>
    );
  }
}

export default HousingView;