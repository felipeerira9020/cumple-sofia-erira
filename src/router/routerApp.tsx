//crear rutas dinaamicas con react-router-dom

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Ubication from "../pages/Ubication/Ubication";

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/ubicacion' element={<Ubication/>}/>
      </Routes>
    </BrowserRouter>
  );
};
