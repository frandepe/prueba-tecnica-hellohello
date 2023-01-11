import * as yup from "yup";
import { useEffect, useState } from "react";
import InputField from "../inputField/inputField";
import MultiStepForm, { FormStep } from "../MultiStepForm/MultiStepForm";
import { getOptionList, sendFormData } from "../../services/api";
import { OptionList } from "../../Interfaces/api";
import { Option } from "../Option/Option";
import "./Form.scss";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Por favor, ingresá un correo electrónico válido.")
    .required("Requerido"),
});

export const Form = () => {
  const [list, setList] = useState<{ [key: string]: any }>([]);
  const [isLoading, setIsLoading] = useState<boolean | null>(null);
  const [statusForm, setStatusForm] = useState(false);
  const getList = async () => {
    try {
      setIsLoading(true);
      const response = await getOptionList();
      setList(response!.data);
      console.log(response!.data);

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
          setStatusForm(true);
          try {
            const response = await sendFormData(email, option);
            console.log(response);
          } catch (err) {
            console.log("Error catch:", err);
          } finally {
            resetForm();
            setStatusForm(false);
          }
        }}
      >
        <FormStep stepName="Opciones" onSubmit={() => console.log("Step2")}>
          <h2 className="Form__step1--h3">
            Para empezar seleccioná una de las siguientes opciones.
          </h2>
          {list?.map((e: OptionList) => (
            <Option key={e.value} data={e} />
          ))}
        </FormStep>
        <FormStep
          stepName="Mail"
          onSubmit={() => console.log("Step1")}
          validationSchema={validationSchema}
        >
          <InputField name="email" placeholder="Email" nameError="email" />
        </FormStep>
        <FormStep
          stepName="Gracias"
          onSubmit={() => console.log("Step3")}
        ></FormStep>
      </MultiStepForm>
    </div>
  );
};
