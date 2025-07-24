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
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN} `,
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
