import Image from "@component/Image";
import { Link } from "react-router-dom";

const ActorInfo = ({ id, name, character, pathImg, episodeCount = "" }) => {
  return (
    <Link
      to={`/people/${id}`}
      className="rounded-sm border border-slate-300 shadow-sm"
    >
      <Image
        src={`${pathImg ? `https://image.tmdb.org/t/p/w276_and_h350_face${pathImg}` : "/public/no-image.svg"}`}
        alt=""
        className="w-full rounded-sm"
        width={185}
        height={234}
      />

      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>

        {episodeCount && (
          <p className="mt-1">
            {episodeCount >= 2
              ? `${episodeCount} Episodes`
              : `${episodeCount} Episode`}
          </p>
        )}
      </div>
    </Link>
  );
};

export default ActorInfo;
