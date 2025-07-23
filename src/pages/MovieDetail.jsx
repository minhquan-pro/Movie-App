import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "@component/Loading";
import Banner from "@component/MediaDetail/Banner";
import ActorList from "@component/MediaDetail/ActorList";
import RelatedMediaList from "@component/MediaDetail/RelatedMediaList";

const MovieDetail = () => {
  const { id: idMovie } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [relatedMovie, setRelatedMovie] = useState([]);
  const [isRelatedMovieLoading, setIsRelatedMovieLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${idMovie}?append_to_response=release_dates,credits`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjBkZDYxMzYyNDQ2NWU3ZTgwOTYxYzIxN2U3NWY5NSIsIm5iZiI6MTc1MzA4NDg4Mi42OTcsInN1YiI6IjY4N2RmM2QyZmQ5NDU1MzFlZThhNGNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzoCBWSr7D1AE9JebBJH_gdt_lpziPHASlRrGQ--O28",
        },
      },
    )
      .then(async (res) => {
        const dataMovieDetail = await res.json();
        setMovieDetail(dataMovieDetail);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [idMovie]);

  useEffect(() => {
    setIsRelatedMovieLoading(true);
    fetch(`https://api.themoviedb.org/3/movie/${idMovie}/recommendations`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjBkZDYxMzYyNDQ2NWU3ZTgwOTYxYzIxN2U3NWY5NSIsIm5iZiI6MTc1MzA4NDg4Mi42OTcsInN1YiI6IjY4N2RmM2QyZmQ5NDU1MzFlZThhNGNmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZzoCBWSr7D1AE9JebBJH_gdt_lpziPHASlRrGQ--O28",
      },
    })
      .then(async (res) => {
        const dataRelatedMovieList = await res.json();
        setRelatedMovie(dataRelatedMovieList);
      })
      .finally(() => {
        setIsRelatedMovieLoading(false);
      });
  }, [idMovie]);

  if (isLoading && isRelatedMovieLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieDetail} />
      <div className="m-auto flex max-w-screen-xl gap-10 px-6 py-10 text-[1.2vw]">
        <div className="flex-[2]">
          <ActorList movieDetail={movieDetail} />
          <RelatedMediaList mediaList={relatedMovie} />
        </div>
        <div className="flex-1">
          <p className="mb-4 text-[1.4vw] font-bold">Information</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
