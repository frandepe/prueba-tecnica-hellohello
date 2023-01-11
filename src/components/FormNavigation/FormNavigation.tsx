import "./FormNavigation.scss";

interface Props {
  stepNumber: number;
}

const FormNavigation = ({ stepNumber }: Props) => {
  return (
    <div className="FormNavigation__container">
      <button type="submit" className="FormNavigation__button">
        {stepNumber === 0
          ? "siguiente"
          : stepNumber === 1
          ? "enviar"
          : stepNumber === 2 && "volver"}
      </button>
    </div>
  );
};

export default FormNavigation;
