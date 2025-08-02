import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";

const SearchForm = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      mediaType: "movie",
      genres: [],
      rating: "All",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="mediaType"
          label="Media Type"
          control={control}
          Component={MediaTypeInput}
        />

        <FormField
          name="genres"
          label="Genres"
          control={control}
          Component={GenresInput}
        />

        <FormField
          name="rating"
          label="Rating"
          control={control}
          Component={RatingInput}
        />

        <input
          type="submit"
          className="mt-5 cursor-pointer rounded-sm border border-slate-600 px-3 py-1 font-bold"
        />
      </form>
    </div>
  );
};

export default SearchForm;
