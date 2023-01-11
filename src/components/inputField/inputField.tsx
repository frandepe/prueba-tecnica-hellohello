import { Field, ErrorMessage, useField, FieldConfig } from "formik";
import "./InputField.scss";

interface Props extends FieldConfig {
  placeholder: string;
  nameError: string;
  label: string;
}

const InputField = ({ label, placeholder, nameError, ...props }: Props) => {
  const [field, meta] = useField(props as any);
  return (
    <div className="InputField__container">
      <label htmlFor={props.name}>{label}</label>
      <Field
        placeholder={placeholder}
        {...field}
        {...props}
        style={meta.error && { border: "1px solid rgb(170, 0, 0)" }}
      />
      <ErrorMessage
        name={nameError}
        component={() => <div className="InputField__error">{meta.error}</div>}
      />
    </div>
  );
};

export default InputField;
