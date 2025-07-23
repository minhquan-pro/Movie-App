import ActorInfo from "./ActorInfo";

const ActorList = ({ movieDetail }) => {
  console.log(movieDetail);

  const actors = movieDetail.credits?.cast.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.character,
    pathImg: actor.profile_path,
  }));

  return (
    <div>
      <p className="mb-4 text-[1.4vw] font-bold">Actors</p>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        {actors?.map((actor) => {
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
    </div>
  );
};

export default ActorList;
