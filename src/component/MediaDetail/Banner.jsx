import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";

const Banner = ({ mediaInfo }) => {
  const genreList = mediaInfo.genres?.map((genre) => {
    return genre.name;
  });

  const certification = (mediaInfo.release_dates?.results || [])
    .find((certi) => {
      return certi.iso_3166_1 === "US";
    })
    ?.release_dates.find((result) => result.certification)?.certification;

  const crews = mediaInfo.credits?.crew
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  const groupCrew = groupBy(crews, "job");

  return (
    <div className="relative overflow-hidden">
      <img
        src={`https://image.tmdb.org/t/p/original/${mediaInfo.backdrop_path}`}
        alt=""
        className="absolute w-full brightness-[.2]"
      />
      <div className="relative z-10 m-auto flex max-w-screen-lg gap-6 px-6 py-10 text-white lg:gap-10">
        <div className="flex-1">
          <img
            src={`https://image.tmdb.org/t/p/original/${mediaInfo.poster_path}`}
            alt=""
          />
        </div>
        <div className="flex-[2] text-[1vw]">
          <p className="text-[2vw] font-bold">{mediaInfo.title}</p>
          <div className="mt-3 flex items-center gap-8">
            <p className="inline-block h-11 border border-slate-400 p-2 text-slate-400">
              {certification}
            </p>
            <div className="hidden sm:block">
              <p className="inline-block">{mediaInfo.release_date}</p>
              <p className="mt-2">{genreList?.join(", ")}</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-10 text-[1.2vw]">
            <div className="flex items-center gap-3">
              <CircularProgressBar voteAverage={mediaInfo.vote_average} />
              Rating
            </div>
            <div className="flex items-center gap-3">
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </div>
          </div>
          <div className="mt-5 hidden sm:block">
            <p className="text-[1.1vw] font-bold">Overview</p>
            <p className="mt-2">{mediaInfo.overview}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 text-[0.9vw]">
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
  );
};

export default Banner;
