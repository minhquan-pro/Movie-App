import { useEffect, useState } from "react";
import FeatureMovieDetail from "./FeatureMovieDetail";
import FeatureMovieSLide from "./FeatureMovieSlide";
import useFetch from "@hooks/useFetch";

const FeatureMovie = () => {
  const [movieActive, setMovieActive] = useState([]);

  const { data: moviePopular } = useFetch({
    url: "movie/popular",
  });

  useEffect(() => {
    setMovieActive(moviePopular.results?.[0]);
  }, [moviePopular]);

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
