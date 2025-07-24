import { useParams } from "react-router-dom";
import Loading from "@component/Loading";
import Banner from "@component/MediaDetail/Banner";
import ActorList from "@component/MediaDetail/ActorList";
import RelatedMediaList from "@component/MediaDetail/RelatedMediaList";
import MovieInformation from "@component/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const MovieDetail = () => {
  const { id: idMovie } = useParams();

  const { isLoading, data: movieDetail } = useFetch({
    url: `movie/${idMovie}?append_to_response=release_dates,credits`,
  });

  const { isLoading: isRelatedMovieLoading, data: relatedMovie } = useFetch({
    url: `movie/${idMovie}/recommendations`,
  });

  if (isLoading && isRelatedMovieLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner mediaInfo={movieDetail} />
      <div className="m-auto flex max-w-screen-xl gap-10 px-6 py-10 text-[1.2vw]">
        <div className="flex-[2]">
          <ActorList movieDetail={movieDetail} />
          <RelatedMediaList mediaList={relatedMovie} />
        </div>
        <MovieInformation movieDetail={movieDetail} />
      </div>
    </div>
  );
};

export default MovieDetail;
