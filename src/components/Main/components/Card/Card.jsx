import ImagePopup from "../../Popup/ImagePopup/ImagePopup";

const Card = ({card, handleOpenPopup}) => {
  
  const {name,link,isLiked}=card;

  const imageComponent = {    
    children: <ImagePopup card={card} />,
  };

  return (
    <div className="card__container">
      {/* contenedor para la parte de arriba de la tarjeta imagen y btn delete */}
      <div className="card__container-img">
        <img
          src={link}
          alt={name}
          className="card__container-image"
          onClick={() => handleOpenPopup(imageComponent)}
        />
        <button className="card__delete-img"></button>
      </div>

      {/* contenedor para el titulo y el boton like */}
      <div className="card__container-text">
        <h3 className="card__container-title">{name}</h3>
        <button className="card__container-btn"></button>
      </div>
    </div>
  );
};

export default Card;
