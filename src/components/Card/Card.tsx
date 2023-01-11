import "./Card.scss";
import imgCard from "../../assets/image.jpg";
import iconCard from "../../assets/icon-card.svg";
import imgHome from "../../assets/icon-home.svg";

export const Card = () => {
  return (
    <div className="Card__container">
      <img src={imgCard} alt="face" />
      <div className="Card__container--text">
        <div className="Card__home">
          <img src={imgHome} alt="home" />
        </div>
        <p className="Card__firstText">lorem ipsum dolor</p>
        <p className="Card__secondText">
          Quis mollis nisl nunc at massa vestibulum sed metus in lorem tristique
        </p>
        <div className="Card__textIcon">
          <img src={iconCard} alt="" />
          <p>Lorem ipsum dolo sit ultrice</p>
        </div>
        <div className="Card__textIcon">
          <img src={iconCard} alt="" />
          <p>Lorem ipsum dolo sit ultrice</p>
        </div>
        <div className="Card__container--button">
          <button>lo quiero ya</button>
        </div>
      </div>
    </div>
  );
};
