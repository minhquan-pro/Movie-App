import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";
import Header from "./component/Header";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<HomePages />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
