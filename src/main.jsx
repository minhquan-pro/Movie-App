import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import ModalProvider from "@context/ModalProvider";
import React from "react";

const HomePages = React.lazy(() => import("@pages/HomePages"));
const MovieDetail = React.lazy(() => import("@pages/MovieDetail"));
const TVShowDetail = React.lazy(() => import("@pages/TVShowDetail"));
const PeoplePage = React.lazy(() => import("@pages/PeoplePage"));

createRoot(document.getElementById("root")).render(
  <ModalProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<HomePages />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/tv/:id" element={<TVShowDetail />} />
          <Route path="people/:id" element={<PeoplePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ModalProvider>,
);
