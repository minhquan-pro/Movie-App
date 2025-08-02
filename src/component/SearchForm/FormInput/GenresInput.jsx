import useFetch from "@hooks/useFetch";
import React, { useEffect } from "react";
import { useWatch } from "react-hook-form";

const GenresInput = ({ control, onChange, value }) => {
  const watchValue = useWatch({
    name: "mediaType",
    control,
  });

  const { data } = useFetch(
    {
      url: `genre/${watchValue}/list`,
    },
    { enable: watchValue },
  );

  useEffect(() => {
    onChange([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchValue]);

  return (
    <div className="flex flex-wrap gap-2">
      {data.genres?.map((genre) => {
        return (
          <p
            key={genre.id}
            className={`cursor-pointer rounded-lg border p-2 ${value.includes(genre.id) && "bg-black text-white"}`}
            onClick={() => {
              if (!value.includes(genre.id)) {
                onChange([...value, genre.id]);
              } else {
                const newValue = value.filter((value) => value !== genre.id);
                onChange([...newValue]);
              }
            }}
          >
            {genre.name}
          </p>
        );
      })}
    </div>
  );
};

export default GenresInput;
