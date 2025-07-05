const ImagePopup = ({ card }) => {
  
  return (


    <form className="form__popup" noValidate>
      <div className="form__popup-image">
        <img src={card.link} alt={card.name} className="form__popup-img" />
        <p className="form__popup-caption">{card.name} </p>
      </div>
    </form>

  );
};

export default ImagePopup;
