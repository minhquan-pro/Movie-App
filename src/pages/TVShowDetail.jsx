import { useParams } from "react-router-dom";
import Loading from "@component/Loading";
import Banner from "@component/MediaDetail/Banner";
import ActorList from "@component/MediaDetail/ActorList";
import RelatedMediaList from "@component/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import TVShowInformation from "@component/MediaDetail/TVShowInformation";
import SeasonList from "@component/MediaDetail/SeasonList";

const TVShowDetail = () => {
  const { id: idMovie } = useParams();

  const { isLoading, data: tvDetail } = useFetch({
    url: `tv/${idMovie}?append_to_response=content_ratings,credits,aggregate_credits,videos`,
  });

  const { isLoading: isRelatedMovieLoading, data: relatedMovie } = useFetch({
    url: `tv/${idMovie}/recommendations`,
  });

  const genres = tvDetail.genres?.map((genre) => genre.name);

  const rawCertification = tvDetail.content_ratings?.results || [];
  const usCertification = rawCertification.find(
    (rating) => rating.iso_3166_1 === "US",
  );
  const certification = usCertification?.rating;

  const rawCrews = tvDetail.aggregate_credits?.crew || [];
  const directorAndWriters = rawCrews
    .filter((crew) => ["Director", "Writer"].includes(crew.jobs[0].job))
    .slice(0, 10);

  const crews = directorAndWriters.map((crew) => ({
    id: crew.id,
    name: crew.name,
    job: crew.jobs[0].job,
  }));

  const rawActors = tvDetail.aggregate_credits?.cast || [];

  const actors = rawActors.map((actor) => ({
    id: actor.id,
    name: actor.name,
    character: actor.roles[0].character,
    pathImg: actor.profile_path,
    episodeCount: actor.total_episode_count,
  }));

  const trailerVideos = (tvDetail.videos?.results || []).find(
    (video) => video.type === "Trailer",
  );
  const keyTrailerVideo = trailerVideos?.key;

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
        crews={crews}
        keyTrailerVideo={keyTrailerVideo}
      />
      <div className="m-auto flex max-w-screen-xl gap-10 px-6 py-10 text-[1.2vw]">
        <div className="flex-[2]">
          <ActorList actors={actors} />
          <SeasonList tvDetail={tvDetail} />
          <RelatedMediaList
            mediaList={relatedMovie?.results}
            title="More Like This"
          />
        </div>
        <TVShowInformation tvDetail={tvDetail} />
      </div>
    </div>
  );
};

export default TVShowDetail;
