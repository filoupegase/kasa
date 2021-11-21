import React from "react";
import logo from "../../assets/images/logo.svg";
import "./Home.css";
import Banner from "../../_component/Banner";
import ImageCoast from "../../assets/images/coast-landscape.jpeg";


const Home = () => {
  return (
    <>
      <Banner
        imgSource={ImageCoast}
        altText="Un paysage de cote"
        title="Chez vous, partout et ailleurs"
      />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/Home.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
};

export default Home;
