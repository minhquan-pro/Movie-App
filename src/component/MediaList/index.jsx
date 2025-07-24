import MovieCard from "@component/MovieCard";
import { useEffect, useState } from "react";

const MediaList = ({ title, tabs }) => {
  const [tabActive, setTabActive] = useState(tabs[0]?.id);
  const [mediaList, setMediaList] = useState([]);

  const url = tabs.find((tab) => tab.id === tabActive)?.url;

  useEffect(() => {
    if (!url) return;

    fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
      },
    }).then(async (res) => {
      const dataMovie = await res.json();
      const AllMovieList = dataMovie.results;
      setMediaList(AllMovieList);
    });
  }, [url]);

  return (
    <div className="bg-black px-8 py-10 text-white">
      <div className="flex items-center gap-8 text-[1.2vw]">
        <p className="text-[2vw] font-bold">{title}</p>
        <ul className="flex cursor-pointer rounded border">
          {tabs.map((tab) => {
            return (
              <li
                key={tab.id}
                className={`px-8 py-2 ${tabActive === tab.id ? "bg-white text-black" : ""}`}
                onClick={() => setTabActive(tab.id)}
              >
                {tab.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="sm: mt-12 grid grid-cols-2 grid-cols-4 gap-2 lg:grid-cols-6 lg:gap-4">
        {mediaList.map((media) => {
          return (
            <MovieCard key={media.id} media={media} tabActive={tabActive} />
          );
        })}
      </div>
    </div>
  );
};

export default MediaList;
