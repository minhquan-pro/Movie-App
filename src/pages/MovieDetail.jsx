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

  const genreList = movieDetail.genres?.map((genre) => {
    return genre.name;
  });

  const certification = (movieDetail.release_dates?.results || [])
    .find((certi) => {
      return certi.iso_3166_1 === "US";
    })
    ?.release_dates.find((result) => result.certification)?.certification;

  const crews = movieDetail.credits?.crew
    .filter((crew) => ["Director", "Writer", "Screenplay"].includes(crew.job))
    .map((crew) => ({ id: crew.id, name: crew.name, job: crew.job }));

  if (isLoading && isRelatedMovieLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Banner
        title={movieDetail.title}
        releaseDate={movieDetail.release_date}
        voteAverage={movieDetail.vote_average}
        overview={movieDetail.overview}
        backdropPath={movieDetail.backdrop_path}
        posterPath={movieDetail.poster_path}
        certification={certification}
        genreList={genreList}
        crews={crews}
      />
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
