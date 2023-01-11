import { useEffect, useState } from "react";
import * as yup from "yup";
import { getOptionList, sendFormData } from "../../services/api";
import InputField from "../inputField/inputField";
import MultiStepForm, { FormStep } from "../MultiStepForm/MultiStepForm";
import { Option } from "../Option/Option";
import { OptionList } from "../../Interfaces/api";
import imgSuccess from "../../assets/icon-success.svg";
import "./Form.scss";

const validationSchema = yup.object({
  email: yup
    .string()
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Por favor, ingresá un correo electrónico válido."
    )
    .required("Este campo es requerido"),
});

export const Form = () => {
  const [list, setList] = useState<{ [key: string]: any }>([]);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const getList = async () => {
    try {
      setIsLoading(true);
      const response = await getOptionList();
      setList(response!.data);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="Form__container">
      <MultiStepForm
        initialValues={{
          email: "",
          option: "",
        }}
        onSubmit={async ({ email, option }, { resetForm }) => {
          try {
            await sendFormData(email, option);
          } catch (err) {
            console.log("Error catch:", err);
          } finally {
            resetForm();
          }
        }}
      >
        <FormStep
          stepName="Opciones"
          validationSchema={yup.object({
            option: yup.string().required("Este campo es requerido"),
          })}
        >
          <h2 className="Form__step--h2">
            Para empezar seleccioná una de las siguientes opciones.
          </h2>
          {!isLoading
            ? list?.map((e: OptionList) => <Option key={e.value} data={e} />)
            : "Cargando..."}
        </FormStep>
        <FormStep stepName="Mail" validationSchema={validationSchema}>
          <h2 className="Form__step--h2">
            Para terminar completá el siguiente formulario.
          </h2>
          <InputField
            name="email"
            placeholder="juan@example.com"
            nameError="email"
            label="Correo electrónico"
          />
        </FormStep>
        <FormStep stepName="Gracias">
          <div className="Form__success">
            <img src={imgSuccess} alt="success" />
            <h2 className="Form__step--h2">
              Gracias por completar nuestro formulario.
            </h2>
          </div>
        </FormStep>
      </MultiStepForm>
    </div>
  );
};
