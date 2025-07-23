import { useState } from "react";
import ActorInfo from "./ActorInfo";

const ActorList = ({ movieDetail }) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const actors = movieDetail.credits?.cast.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    pathImg: actor.profile_path,
  }));

  const showActors = isShowMore ? actors : actors?.slice(0, 4);

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        {showActors?.map((actor) => {
          return (
            <ActorInfo
              key={actor.id}
              name={actor.name}
              character={actor.character}
              pathImg={actor.pathImg}
            />
          );
        })}
      </div>
      <p
        className="mt-3 inline-block cursor-pointer rounded-sm border border-slate-600 p-3 font-bold"
        onClick={() => setIsShowMore(!isShowMore)}
      >
        {isShowMore ? "Show Less" : "Show More"}
      </p>
    </div>
  );
};

export default ActorList;
