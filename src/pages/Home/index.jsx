import React, { Component } from "react";
import PropTypes from "prop-types";
import Banner from "../../_component/Banner";
import ImageCoast from "../../assets/images/coast-landscape.jpeg";
import Card from "../../_component/Card";
import "./Home.scss";
import { PropertyApartment } from "../../data/propertyApartment";


class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { advertisements } = this.props;
    // console.log("dans la home", advertisements);
    return (
      <>
        <Banner
          imgSource={ImageCoast}
          altText="Un paysage de cote"
          title="Chez vous, partout et ailleurs"
        />
        <div className="Home">
          <div className="Home-header">
            {advertisements.map(({ id, cover, title, location }) => (
              <Card
                key={`card-${id}`}
                id={id}
                cover={cover}
                title={title}
                location={location}
              />
            ))}
          </div>
        </div>
      </>
    );
  };
}

Home.propTypes = {
  advertisements: PropTypes.arrayOf(PropTypes.instanceOf(PropertyApartment))
    .isRequired
};

export default Home;
