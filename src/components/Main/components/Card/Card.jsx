import ImagePopup from "../../Popup/ImagePopup/ImagePopup";


const Card = ({ card, handleOpenPopup, handleCardLike,handleCardDelete }) => {
  const { name, link, isLiked, _id } = card;
  

  const imageComponent = {
    children: <ImagePopup card={card} />,
  };

  /* variable uqe pinta like */
  const cardLikeButtonClassName = `card__container-btn ${isLiked ? "card__btn-like" : ""}`;

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
        <button className="card__delete-img" onClick={()=>handleCardDelete(_id)}></button>
      </div>

      {/* contenedor para el titulo y el boton like */}
      <div className="card__container-text">
        <h3 className="card__container-title">{name}</h3>
        <button
          className={cardLikeButtonClassName}
          onClick={() => handleCardLike(_id)}
        ></button>
      </div>
    </div>
  );
};

export default Card;
