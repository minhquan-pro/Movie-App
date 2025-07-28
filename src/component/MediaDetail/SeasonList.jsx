import { useState } from "react";
import SeasonInfo from "./SeasonInfo";

const SeasonList = ({ tvDetail }) => {
  const [showSeasons, setShowSeasons] = useState(false);

  const seasons = tvDetail?.seasons?.reverse();
  const currentSeasons = showSeasons ? seasons : seasons?.slice(0, 3);

  return (
    <div className="mt-10">
      <p className="text-[1.4vw] font-bold">Seasons</p>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:gap-6">
        {currentSeasons?.map((season) => {
          return (
            <SeasonInfo
              key={season.id}
              id={season.id}
              name={season.name}
              poster={season.poster_path}
              voteAverage={season.vote_average}
              overview={season.overview}
              episodeCount={season.episode_count}
              realeaseDate={season.air_date}
            />
          );
        })}
      </div>
      <p
        className={`${seasons?.length > 3 ? `mt-3 inline-block cursor-pointer rounded-sm border border-slate-600 px-2 py-3 font-bold` : ""} `}
        onClick={() => setShowSeasons(!showSeasons)}
      >
        {showSeasons ? "Show Less" : seasons?.length > 3 ? "Show More" : ""}
      </p>
    </div>
  );
};

export default SeasonList;
