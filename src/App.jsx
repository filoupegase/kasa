import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Header from "./pages/Header/Header";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} strict exact />
        <Route path="/fiche-logement/:questionNumber" element={<Home />} strict exact />
        <Route path="/about-us" element={<Home />} strict exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;