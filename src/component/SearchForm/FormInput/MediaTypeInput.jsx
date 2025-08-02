import React from "react";

const MediaTypeInput = ({ onChange, name, value }) => {
  return (
    <div>
      <div className="flex gap-2">
        <input
          id="sf-type-movie"
          type="radio"
          name={name}
          value="movie"
          onChange={onChange}
          checked={value === "movie"}
        />
        <label htmlFor="sf-type-movie">Movie</label>
      </div>

      <div className="flex gap-2">
        <input
          id="sf-type-tv"
          type="radio"
          name={name}
          value="tv"
          onChange={onChange}
          checked={value === "tv"}
        />
        <label htmlFor="sf-type-tv">TV Show</label>
      </div>
    </div>
  );
};

export default MediaTypeInput;
