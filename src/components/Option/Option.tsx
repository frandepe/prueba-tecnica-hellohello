import { Field } from "formik";
import { OptionList } from "../../Interfaces/api";
import iconRight from "../../assets/icon-chevron-right.svg";
import "./Option.scss";

interface Props {
  data: OptionList;
}

export const Option = ({ data }: Props) => {
  let { value, label, image } = data;
  return (
    <label className="label__container">
      <Field type="radio" value={value} name="option" />
      <div className="label__button">
        <div className="label__textImg">
          <img className="label__imgValue" src={image} alt={value} />
          <p>{label}</p>
        </div>
        <img className="label__svg--right" src={iconRight} alt="icon-right" />
      </div>
    </label>
  );
};
