import React from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";

const SearchForm = () => {
  const { handleSubmit, control, register } = useForm();

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

        <input
          type="submit"
          className="mt-5 cursor-pointer rounded-sm border border-slate-600 px-3 py-1 font-bold"
        />
      </form>
    </div>
  );
};

export default SearchForm;
