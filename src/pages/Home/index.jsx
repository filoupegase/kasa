import React, { Component } from "react";
import "./Home.scss";
import Banner from "../../_component/Banner";
import ImageCoast from "../../assets/images/coast-landscape.jpeg";
import Card from "../../_component/Card";


class Home extends Component {
  render() {
    return (
      <>
        <Banner
          imgSource={ImageCoast}
          altText="Un paysage de cote"
          title="Chez vous, partout et ailleurs"
        />
        <div className="Home">
          <div className="Home-header">
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
              title="Titre de la location"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
              title="Titre de la location"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
              title="Titre de la location"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
              title="Titre de la location"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
              title="Titre de la location"
            />
            <Card
              imgSource={ImageCoast}
              altText="image de côte"
              title="Titre de la location"
            />
          </div>
        </div>
      </>
    );
  };
}

export default Home;
