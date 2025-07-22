import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePages from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
    </Routes>
  </BrowserRouter>,
);
