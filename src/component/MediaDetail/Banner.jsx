import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { groupBy } from "lodash";
import CircularProgressBar from "../CircularProgressBar";
import Image from "@component/Image";
import { useContext } from "react";
import { modalProvider } from "@context/ModalProvider";

const Banner = ({
  title,
  releaseDate,
  voteAverage,
  overview,
  backdropPath,
  posterPath,
  certification,
  genreList,
  crews,
  keyTrailerVideo,
}) => {
  const groupCrew = groupBy(crews, "job");

  const { setIsShowing, setIdContent, setTitleVideo } =
    useContext(modalProvider);

  if (!title) return;

  return (
    <div className="relative overflow-hidden">
      <Image
        src={
          backdropPath && `https://image.tmdb.org/t/p/original/${backdropPath}`
        }
        alt=""
        className="absolute w-full brightness-[.2]"
        width={1905}
        height={592}
      />

      <div className="relative z-10 m-auto flex max-w-screen-lg gap-6 px-6 py-10 text-white lg:gap-10">
        <div className="flex-1">
          <Image
            src={
              posterPath && `https://image.tmdb.org/t/p/original/${posterPath}`
            }
            alt=""
            width={312}
            height={468}
          />
        </div>
        <div className="flex-[2] text-[1vw]">
          <p className="text-[2vw] font-bold">{title}</p>
          <div className="mt-3 flex items-center gap-8">
            <p className="flex h-11 items-center border border-slate-400 p-2 text-slate-400">
              {certification}
            </p>
            <div className="hidden sm:block">
              <p className="inline-block">{releaseDate}</p>
              <p className="mt-2">{genreList?.join(", ")}</p>
            </div>
          </div>
          <div className="mt-8 flex items-center gap-10 text-[1.2vw]">
            <div className="flex items-center gap-3">
              <CircularProgressBar voteAverage={voteAverage} />
              Rating
            </div>
            <button
              className="flex items-center gap-3"
              onClick={() => {
                setIsShowing(true);
                setIdContent(keyTrailerVideo);
                setTitleVideo(title);
              }}
            >
              <FontAwesomeIcon icon={faPlay} />
              Trailer
            </button>
          </div>
          <div className="mt-5 hidden sm:block">
            <p className="text-[1.1vw] font-bold">Overview</p>
            <p className="mt-2">{overview}</p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 text-[0.9vw]">
            {Object.keys(groupCrew).map((job) => {
              return (
                <div key={job}>
                  <p className="font-bold">{job}</p>
                  <p>{groupCrew[job].map((info) => info.name).join(", ")}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
