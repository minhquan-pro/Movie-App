import MovieCard from "@component/MovieCard";
import { useState } from "react";

const RelatedMediaList = ({ mediaList = [], title, className }) => {
  const [isShowMoreRelatedMedias, setIsShowMoreRelatedMedias] = useState(false);

  const currentRelatedMedias = isShowMoreRelatedMedias
    ? mediaList
    : mediaList?.slice(0, 8);

  return (
    <div className={className}>
      {title && <p className="mb-4 text-[1.4vw] font-bold">{title}</p>}
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4 lg:gap-4">
        {currentRelatedMedias?.map((media) => {
          return <MovieCard key={media.id} media={media} />;
        })}
      </div>

      {mediaList?.length >= 8 ? (
        <p
          className="mt-3 inline-block cursor-pointer rounded-sm border border-slate-600 px-2 py-3 font-bold"
          onClick={() => setIsShowMoreRelatedMedias(!isShowMoreRelatedMedias)}
        >
          {isShowMoreRelatedMedias ? "Show Less" : "Show More"}
        </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default RelatedMediaList;
