import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import Header from "./component/Header";
import TVShowDetail from "@pages/TVShowDetail";
import ModalProvider from "@context/ModalProvider";
import ActiveProvider from "@context/activeProvider";

createRoot(document.getElementById("root")).render(
  <ActiveProvider>
    <ModalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Header />}>
            <Route path="/" element={<HomePages />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/tv/:id" element={<TVShowDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ModalProvider>
  </ActiveProvider>,
);
