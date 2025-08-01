import SearchForm from "@component/SearchForm";
import React from "react";

const SearchPage = () => {
  return (
    <div className="m-auto max-w-screen-xl gap-4 p-10 text-[1.2vw] lg:gap-6">
      <p className="text-[2vw] font-bold">Search</p>
      <div className="flex">
        <div className="flex-1">
          <SearchForm />
        </div>
        <div className="flex-[3]">Result</div>
      </div>
    </div>
  );
};

export default SearchPage;
