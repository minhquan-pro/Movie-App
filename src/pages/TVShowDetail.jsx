import { useParams } from "react-router-dom";
import Loading from "@component/Loading";
import Banner from "@component/MediaDetail/Banner";
import ActorList from "@component/MediaDetail/ActorList";
import RelatedMediaList from "@component/MediaDetail/RelatedMediaList";
import MovieInformation from "@component/MediaDetail/MovieInformation";
import useFetch from "@hooks/useFetch";

const TVShowDetail = () => {
  const { id: idMovie } = useParams();

  const { isLoading, data: tvDetail } = useFetch({
    url: `tv/${idMovie}?append_to_response=content_ratings,credits,aggregate_credits`,
  });

  const { isLoading: isRelatedMovieLoading, data: relatedMovie } = useFetch({
    url: `tv/${idMovie}/recommendations`,
  });

  const genres = tvDetail.genres?.map((genre) => genre.name);

  const certification = tvDetail.content_ratings?.results.find(
    (rating) => rating.iso_3166_1 === "US",
  )?.rating;

  if (isLoading && isRelatedMovieLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        title={tvDetail.name}
        releaseDate={tvDetail.first_air_date}
        voteAverage={tvDetail.vote_average}
        overview={tvDetail.overview}
        backdropPath={tvDetail.backdrop_path}
        posterPath={tvDetail.poster_path}
        certification={certification}
        genreList={genres}
        // crews={crews}
      />
      <div className="m-auto flex max-w-screen-xl gap-10 px-6 py-10 text-[1.2vw]">
        <div className="flex-[2]">
          <ActorList movieDetail={tvDetail} />
          <RelatedMediaList mediaList={relatedMovie} />
        </div>
        <MovieInformation movieDetail={tvDetail} />
      </div>
    </div>
  );
};

export default TVShowDetail;
