import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CircularProgressBar from "../component/CircularProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { groupBy } from "lodash";

const MovieDetail = () => {
  const { id: idMovie } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  useEffect(() => {
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
    ).then(async (res) => {
      const dataMovieDetail = await res.json();
      setMovieDetail(dataMovieDetail);
    });
  }, [idMovie]);

  const genreList = movieDetail.genres?.map((genre) => {
    return genre.name;
  });

  const certification = (movieDetail.release_dates?.results || [])
    .find((certi) => {
      return certi.iso_3166_1 === "US";
    })
    ?.release_dates.find((result) => result.certification)?.certification;

  const crews = movieDetail.credits?.crew
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  const groupCrew = groupBy(crews, "job");

  return (
    <div>
      <div className="relative overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt=""
          className="absolute w-full brightness-[.2]"
        />
        <div className="relative z-10 m-auto flex max-w-screen-lg gap-6 py-10 text-white lg:gap-10">
          <div className="flex-1">
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
              alt=""
            />
          </div>
          <div className="flex-[2] text-[0.8vw]">
            <p className="text-[2vw] font-bold">{movieDetail.title}</p>
            <div className="mt-3 flex items-center gap-8">
              <p className="inline-block h-11 border border-slate-400 p-2 text-slate-400">
                {certification}
              </p>
              <div className="hidden sm:block">
                <p className="inline-block">{movieDetail.release_date}</p>
                <p className="mt-2">{genreList?.join(", ")}</p>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-10 text-[1.2vw]">
              <div className="flex items-center gap-3">
                <CircularProgressBar voteAverage={movieDetail.vote_average} />
                Rating
              </div>
              <div className="flex items-center gap-3">
                <FontAwesomeIcon icon={faPlay} />
                Trailer
              </div>
            </div>
            <div className="mt-5 hidden sm:block">
              <p className="text-[1.1vw] font-bold">Overview</p>
              <p className="mt-2">{movieDetail.overview}</p>
            </div>
            <div className="mt-8 grid grid-cols-2">
              {Object.keys(groupCrew).map((job) => {
                return (
                  <div key={job}>
                    <p className="font-bold">{job}</p>
                    <p>{groupCrew[job].map((info) => info.name).join(", ")}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
