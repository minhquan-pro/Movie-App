const ActorInfo = ({ name, character, pathImg }) => {
  return (
    <div className="rounded-sm border border-slate-300 shadow-sm">
      <img
        src={`${pathImg ? `https://image.tmdb.org/t/p/w276_and_h350_face${pathImg}` : "/public/no-image.svg"}`}
        alt=""
        className="rounded-sm"
      />
      <div className="p-3">
        <p className="font-bold">{name}</p>
        <p>{character}</p>
        <p className="mt-1">18</p>
      </div>
    </div>
  );
};

export default ActorInfo;
