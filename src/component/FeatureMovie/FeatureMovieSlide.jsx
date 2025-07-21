const FeatureMovieSLide = ({ movieList, movieActive, setMovieActive }) => {
  return (
    <div className="absolute bottom-[10%] right-20">
      <ul className="flex gap-4">
        {movieList?.map((movie) => {
          return (
            <li
              key={movie.id}
              className={`h-2 w-12 ${movie.id === movieActive.id ? "bg-slate-100" : "bg-slate-500"}`}
              onClick={() => setMovieActive(movie)}
            ></li>
          );
        })}
      </ul>
    </div>
  );
};

export default FeatureMovieSLide;
