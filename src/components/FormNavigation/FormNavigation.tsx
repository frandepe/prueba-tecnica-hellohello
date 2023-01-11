import "./FormNavigation.scss";

interface Props {
  stepNumber: number;
}

const FormNavigation = (props: Props) => {
  return (
    <div className="FormNavigation__container">
      <button type="submit" className="FormNavigation__button">
        {props.stepNumber === 0
          ? "siguiente"
          : props.stepNumber === 1
          ? "enviar"
          : props.stepNumber === 2 && "volver"}
      </button>
    </div>
  );
};

export default FormNavigation;
