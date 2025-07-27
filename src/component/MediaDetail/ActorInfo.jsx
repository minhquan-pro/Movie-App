import Image from "@component/Image";

const ActorInfo = ({ id, name, character, pathImg, episodeCount = "" }) => {
  return (
    <div className="rounded-sm border border-slate-300 shadow-sm">
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
    </div>
  );
};

export default ActorInfo;
