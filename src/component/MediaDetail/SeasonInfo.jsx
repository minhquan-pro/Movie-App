import CircularProgressBar from "@component/CircularProgressBar";
import Image from "@component/Image";

const SeasonInfo = ({
  name,
  poster,
  voteAverage,
  overview,
  episodeCount,
  realeaseDate,
}) => {
  return (
    <div className="flex items-center gap-5 rounded border border-slate-400 p-4 shadow-lg">
      <Image
        src={`https://media.themoviedb.org/t/p/w130_and_h195_face/${poster}`}
        alt=""
        className="lg: h-[195px] w-[130px] rounded"
        height={195}
        width={130}
      />

      <div>
        <p className="font-bold">{name}</p>
        <p className="mt-2 flex items-center gap-6">
          Rating: <CircularProgressBar voteAverage={voteAverage} />
        </p>
        <p className="mt-1">Release Date: {realeaseDate}</p>
        <p>
          {episodeCount >= 2
            ? `${episodeCount} Episodes`
            : `${episodeCount} Episode`}
        </p>
        <p className="mt-3">{overview}</p>
      </div>
    </div>
  );
};

export default SeasonInfo;
