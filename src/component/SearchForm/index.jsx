import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import MediaTypeInput from "./FormInput/MediaTypeInput";
import GenresInput from "./FormInput/GenresInput";
import RatingInput from "./FormInput/RatingInput";
import { useSearchParams } from "react-router-dom";

const SearchForm = ({ setGetDataForm }) => {
  const [searchParam] = useSearchParams();
  const mediaType = searchParam.get("mediaType");

  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      mediaType: ["tv", "movie"].includes(mediaType) ? mediaType : "movie",
      genres: [],
      rating: "All",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const dataForm = watch();

  useEffect(() => {
    setGetDataForm(dataForm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(dataForm)]);

  return (
    <div className="rounded border p-5 shadow-lg">
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
      </form>
    </div>
  );
};

export default SearchForm;
