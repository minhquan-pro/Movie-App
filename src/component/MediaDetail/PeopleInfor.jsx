import Loading from "@component/Loading";
import MovieCard from "@component/MovieCard";
import useFetch from "@hooks/useFetch";
import { useParams } from "react-router-dom";

const PeopleInfor = () => {
  const { id: personId } = useParams();

  const { data: person, isLoading } = useFetch({
    url: `/person/${personId}?append_to_response=combined_credits`,
  });

  const relatedMovie = (person.combined_credits?.cast || []).map((movie) => {
    return movie;
  });

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="m-auto flex max-w-screen-xl gap-4 p-10 text-[1.2vw] lg:gap-6">
      <div className="flex-1">
        <img
          src={`https://image.tmdb.org/t/p/original/${person.profile_path}`}
          alt=""
        />
        <p className="mt-3 font-bold">Personal Info</p>
        <div className="mt-3">
          <p className="font-bold">Known For</p>
          <p>{person.known_for_department}</p>
        </div>
        <div className="mt-3">
          <p className="font-bold">Gender</p>
          <p>{person.gender === 1 ? "Female" : "Male"}</p>
        </div>
        <div className="mt-3">
          <p className="font-bold">Place of birth</p>
          <p>{person.place_of_birth}</p>
        </div>
        <div className="mt-3">
          <p className="font-bold">Birthday</p>
          <p>{person.birthday}</p>
        </div>
      </div>
      <div className="flex-[2]">
        <p className="text-[2vw] font-bold">{person.name}</p>
        <div className="mt-3">
          <p className="font-bold">biography</p>
          <p className="mt-2">{person.biography}</p>
        </div>
        <div className="mt-5">
          <p className="font-bold">Known For</p>
          <div className="mt-6 grid grid-cols-4 gap-4">
            {relatedMovie.map((movie) => {
              return <MovieCard key={movie.id} media={movie} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PeopleInfor;
