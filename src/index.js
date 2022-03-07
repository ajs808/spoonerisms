import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./components/About";
import Home from "./components/Home";
import NoPage from "./components/NoPage";

ReactDOM.render(
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="" element={<Layout />}>
  //       <Route index element={<Home />} />
  //       <Route path="about" element={<About />} />
  //       <Route path="*" element={<NoPage />} />
  //     </Route>
  //   </Routes>
  // </BrowserRouter>,
  <>
    <Home />
    <About />
  </>,
  document.getElementById("root")
);
