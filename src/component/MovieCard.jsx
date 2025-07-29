import { Link } from "react-router-dom";
import CircularProgressBar from "./CircularProgressBar";
import Image from "./Image";

const MovieCard = ({ media, tabActive }) => {
  return (
    <div className="relative cursor-pointer rounded-md border border-slate-500 text-[1.2vw]">
      <Link
        to={`${media.media_type === "tv" ? `/tv/${media.id}` : `${media.media_type === "movie" ? `/movie/${media.id}` : `/tv/${media.id}`}`} `}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <Image
          src={`https://image.tmdb.org/t/p/w500/${media.poster_path}`}
          alt
          className="w-full rounded-md"
          width={292}
          height={437}
        />

        <div className="relative top-[-5%] px-4 py-2 lg:top-[-6%]">
          <CircularProgressBar voteAverage={media.vote_average} />
          <p className="mt-4 line-clamp-2 font-bold">
            {media.title || media.name}
          </p>
          <p className="mt-1">{media.release_date || media.first_air_date}</p>
        </div>
        {tabActive === "tv" || media.media_type === "tv" ? (
          <div className="absolute right-2 top-[2%] inline-block rounded bg-white px-1 py-1 text-[1vw] font-bold text-black shadow-lg">
            <p>TV SHOW</p>
          </div>
        ) : (
          ""
        )}
      </Link>
    </div>
  );
};

export default MovieCard;
