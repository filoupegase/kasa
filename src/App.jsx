import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import NotFound from "./pages/NotFound";
import Housing from "./pages/Housing";
import AboutUs from "./pages/AboutUs";
import "./assets/style/scss/_common.scss";
import Footer from "./_component/Footer";


class App extends Component {
  render() {
    const { advertisementsList } = this.props;
    // console.log("App advertisementsList :", advertisementsList.advertisements);
    return (
      <>
        <div className="container">
          <Header />
          <Routes>
            <Route path="/" element={
              <Home advertisements={advertisementsList.advertisements} />} strict exact />
            <Route path="/housing/:id" element={
              <Housing advertisementsList={advertisementsList} />} strict exact />
            <Route path="/about-us" element={<AboutUs />} strict exact />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    );
  };
}

export default App;