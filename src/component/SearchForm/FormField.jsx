import React from "react";
import { Controller } from "react-hook-form";

// eslint-disable-next-line no-unused-vars
const FormField = ({ control, label, name, Component }) => {
  return (
    <div className="mt-4">
      <p className="mb-1 font-bold">{label}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              control={control}
            />
          );
        }}
      />
    </div>
  );
};

export default FormField;
