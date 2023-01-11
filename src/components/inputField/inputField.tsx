import React from "react";
import { Field, ErrorMessage, useField, FieldConfig } from "formik";

interface Props extends FieldConfig {
  placeholder: string;
  nameError: string;
}

const InputField = ({ placeholder, nameError, ...props }: Props) => {
  const [field, meta] = useField(props as any);
  return (
    <>
      <Field placeholder={placeholder} {...field} {...props} />
      <ErrorMessage
        name={nameError}
        component={() => <div>{meta.error}</div>}
      />
    </>
  );
};

export default InputField;
