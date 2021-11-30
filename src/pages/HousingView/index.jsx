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
            <div className="housing_header">
              <div>
                <h1 className="housing_title">{housing.title}</h1>
                <h3 className="housing_location">{housing.location}</h3>
                <div className="housing_tag-box">
                  {housing.tags.map((tag) => (
                    <span className="housing_tag" key={`tag-${tag}`}>
                    {tag}
                  </span>))}
                </div>
              </div>
              <div
                className="housing_star-name"
              >
                <div className="housing_header-name-picture">
                  <p className="housing_name">{housing.host.name}</p>
                  <img
                    className="housing_picture-rounded"
                    src={housing.host.picture}
                    alt={housing.host.name}
                  />
                </div>
                <div className="housing_rating">
                  {ratingScale.map((scale) => (
                    <i
                      className={`fas fa-star${
                        scale <= housing.rating ? " colored" : ""}`}
                      key={`star-${scale}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="housing_collapse-block">
              <Collapse title="description" textArray={[housing.description]} />
              <Collapse title="equipments" textArray={housing.equipments} />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default HousingView;