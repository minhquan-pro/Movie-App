import { useEffect, useState } from "react";
import FeatureMovieDetail from "./FeatureMovieDetail";
import FeatureMovieSLide from "./FeatureMovieSlide";

const FeatureMovie = () => {
  const [moviePopular, setMoviePopular] = useState({});
  const [movieActive, setMovieActive] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjBkZDYxMzYyNDQ2NWU3ZTgwOTYxYzIxN2U3NWY5NSIsIm5iZiI6MTc1MzA4NDg4Mi42OTcsInN1YiI6IjY4N2RmM2QyZmQ5NDU1MzFlZThhNGNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzoCBWSr7D1AE9JebBJH_gdt_lpziPHASlRrGQ--O28",
      },
    }).then(async (res) => {
      const data = await res.json();
      setMoviePopular(data);
      setMovieActive(data.results[0]);
    });
  }, []);

  const movieList = moviePopular.results?.slice(0, 5);

  return (
    <div className="relative text-white">
      <FeatureMovieDetail movieActive={movieActive} />
      <FeatureMovieSLide
        movieList={movieList}
        movieActive={movieActive}
        setMovieActive={setMovieActive}
      />
    </div>
  );
};

export default FeatureMovie;
