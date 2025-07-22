import { Link } from "react-router-dom";
import CircularProgressBar from "../CircularProgressBar";

const MovieCard = ({ media, tabActive }) => {
  return (
    <Link
      to={`./movie/${media.id}`}
      className="cursor-pointer rounded-md border border-slate-500"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
        alt=""
        className="rounded-md"
      />
      <div className="relative top-[-3%] px-4 py-2 lg:top-[-6%]">
        <CircularProgressBar voteAverage={media.vote_average} />
        <p className="mt-4 font-bold">{media.title || media.name}</p>
        <p className="mt-1">{media.release_date || media.first_air_date}</p>
        {tabActive === "tv" || media.media_type === "tv" ? (
          <div className="absolute bottom-[-20%] right-2 inline-block rounded bg-white px-2 py-1 font-bold text-black shadow-sm">
            <p>TV SHOW</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </Link>
  );
};

export default MovieCard;
