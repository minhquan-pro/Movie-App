import Image from "@component/Image";
import Loading from "@component/Loading";
import RelatedMediaList from "@component/MediaDetail/RelatedMediaList";
import useFetch from "@hooks/useFetch";
import { useParams } from "react-router-dom";

const PeoplePage = () => {
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
        <Image
          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${person.profile_path}`}
          alt=""
          width={600}
          height={900}
        />
        <p className="mt-8 text-[1.4vw] font-bold">Personal Info</p>
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
          <p>{person.place_of_birth || "No Reveal"}</p>
        </div>
        <div className="mt-3">
          <p className="font-bold">Birthday</p>
          <p>{person.birthday || "No Reveal"}</p>
        </div>
      </div>
      <div className="flex-[2]">
        <p className="text-[2vw] font-bold">{person.name}</p>
        <div className="mt-3">
          <p className="text-[1.3vw] font-bold">Biography</p>
          <p className="mt-2 whitespace-pre-line">{person.biography}</p>
        </div>
        <RelatedMediaList
          mediaList={relatedMovie}
          title="Known For"
          className="mt-8"
        />
      </div>
    </div>
  );
};
export default PeoplePage;
