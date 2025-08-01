import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "@component/Image";
import { useContext } from "react";
import { modalProvider } from "@context/ModalProvider";
import { Link } from "react-router-dom";

const FeatureMovieDetail = ({ movieActive, idMoviePopular }) => {
  if (!movieActive) return;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setIsShowing, setIdContent } = useContext(modalProvider);

  return (
    <div>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movieActive.backdrop_path}`}
          alt=""
          className="aspect-video w-full brightness-50"
          width={1905}
          height={1072}
        />
      </div>
      <div className="absolute bottom-[10%] left-8 w-1/2 sm:w-1/3">
        <p className="text-[2vw] font-bold">{movieActive.title}</p>
        <div className="mt-2">
          <p className="inline-block border border-gray-400 p-2 text-gray-400">
            PG
          </p>
          <p className="mt-2 text-[1.2vw]">{movieActive.release_date}</p>
        </div>
        <div className="mt-4 hidden text-[1.2vw] sm:block">
          <p className="text-[1.3vw] font-bold">Overview</p>
          <p className="mt-1">{movieActive.overview}</p>
        </div>
        <div className="mt-5 flex gap-5 text-[20px]">
          <button
            className="flex items-center gap-2 rounded bg-white px-4 py-1 text-black"
            onClick={() => {
              setIsShowing(true);
              setIdContent(idMoviePopular);
            }}
          >
            <FontAwesomeIcon icon={faPlay} />
            Trailer
          </button>
          <Link to={`/movie/${movieActive.id}`}>
            <button className="rounded bg-slate-300/35 px-4 py-2">
              View Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeatureMovieDetail;
