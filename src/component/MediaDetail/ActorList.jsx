import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ actors }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  console.log(actors);

  const showActors = isShowMore ? actors : actors?.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        {showActors?.map((actor) => {
          return (
            <ActorInfo
              key={actor.id}
              id={actor.id}
              name={actor.name}
              character={actor.character}
              pathImg={actor.pathImg}
              episodeCount={actor.episodeCount}
            />
          );
        })}
      </div>
      <p
        className="mt-3 inline-block cursor-pointer rounded-sm border border-slate-600 px-2 py-3 font-bold"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default ActorList;
