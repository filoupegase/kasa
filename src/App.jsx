import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./pages/Header";
import NotFound from "./pages/NotFound";
import Housing from "./pages/Housing/Housing";
import AboutUs from "./pages/AboutUs";
import "./assets/style/scss/_common.scss";
import Footer from "./_component/Footer";


const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} strict exact />
          <Route path="/housing/:housingNumber" element={<Housing />} strict exact />
          <Route path="/about-us" element={<AboutUs />} strict exact />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;