import RelatedMediaList from "@component/MediaDetail/RelatedMediaList";
import SearchForm from "@component/SearchForm";
import useFetch from "@hooks/useFetch";
import React, { useState } from "react";

const SearchPage = () => {
  const [getDataForm, setGetDataForm] = useState({
    mediaType: "movie",
    genres: [],
    rating: "All",
  });

  const [minRating, maxRating] =
    getDataForm.rating === "All" ? [0, 100] : getDataForm.rating.split(" - ");

  const { data } = useFetch({
    url: `discover/${getDataForm.mediaType}?with_genres=${getDataForm.genres.join(",")}&sort_by=vote_count.desc&vote_average.gte=${+minRating / 10}&vote_average.lte=${+maxRating / 10}`,
  });

  return (
    <div className="m-auto max-w-screen-xl gap-4 p-10 text-[1.2vw] lg:gap-6">
      <p className="text-[2vw] font-bold">Search</p>
      <div className="mt-4 flex gap-6">
        <div className="flex-1">
          <SearchForm setGetDataForm={setGetDataForm} />
        </div>
        <div className="flex-[3]">
          <RelatedMediaList key={data.results?.id} mediaList={data.results} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
