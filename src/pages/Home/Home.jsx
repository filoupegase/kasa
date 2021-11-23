import React, { Component } from "react";
import "./Home.scss";
import Banner from "../../_component/Banner";
import ImageCoast from "../../assets/images/coast-landscape.jpeg";


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
          <div className="App-header">
          </div>
        </div>
      </>
    );
  };
}

export default Home;
