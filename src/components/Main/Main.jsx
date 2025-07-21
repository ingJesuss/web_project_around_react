import { useEffect, useState, useContext } from "react";
/* componentes */

import NewCard from "./Popup/NewCard/NewCard";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import EditProfile from "./Popup/EditProfile/EditProfile";
import Card from "./components/Card/Card";
/* context */
import CurrentUserContext from "../../contexts/CurrentUserContext";


import { api } from "../../utils/api";
import pencil from "../../images/pencil.jpg";

const Main = ({handleOpenPopup,handleClosePopup}) => {
  /* cards */
  const [cards, setCards] = useState([]);
  useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    });
  }, []);

/* manejador de like */
  async function handleCardLike(cardId) {
    const card = cards.find((c) => c._id === cardId);

    try {
      let updateCard;
      if (card.isLiked) {
        updateCard = await api.deleteLikeCard(cardId);
      } else {
        updateCard = await api.putLikeCard(cardId);
      }
      setCards((prevCards) =>
        prevCards.map((c) => (c._id === cardId ? updateCard : c))
      );
    } catch (err) {
      console.error(err);
    }
  }

  /* manejador de eliminacion de cartas */
  async function handleCardDelete(cardId) {
    try{
      await api.deleteCard(cardId);
      setCards((prevCards) => 
      prevCards.filter((card)=> card._id != cardId));
    }catch(err){
      console.error("Error al borrar la card:",err)
    }
    
  }

  
  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };

  /* usuario */
  const {currentUser} = useContext(CurrentUserContext);

  /* informacion de usuaio */
  const editAvatarPopup = {
    title: "Cambiar foto de Perfil",
    children: <EditAvatar />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };


  return (
    <>
      {/*   Comienzo de contenido */}
      <main className="content">
        {/*   seccion de perfil */}
        <section className="profile">
          <div className="profile__container">
            {/*   contenedor para la imagen de usuario */}
            <div className="profile__image-container">
              {currentUser.avatar ? (
                <img
                  src={currentUser.avatar}
                  alt="imagen de perfil"
                  className="profile__image"
                />
              ) : (
                <div className="container"></div>
              )}

              <button
                className="profile__edit-button"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              >
                <img src={pencil} alt="" className="profile__edit-icon" />
              </button>
            </div>

            {/*   contenedor de perfil de usuario */}

            <div className="profile__text-container">
              <p className="profile__name">
                {currentUser.name || "cargando ...."}
              </p>

              {/*   boton para abrir el formulario */}
              <button
                className="profile__btn"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
              <p className="profile__job">
                {currentUser.about || "cargando ...."}
              </p>
            </div>

            {/*   boton para agregar */}
            <button
              className="profile__btn-add"
              onClick={() => handleOpenPopup(newCardPopup)}
            >
              +
            </button>
          </div>
        </section>

        <section className="card">
          {/* contenedor principal de cards */}
          <div className="card__containers">
            {cards.map((card) => (
              <Card
                key = {card._id}
                card = {card}
                handleOpenPopup = {handleOpenPopup}
                handleCardLike = {handleCardLike}
                handleCardDelete = {handleCardDelete}
              />
            ))}
          </div>
        </section>

        
      </main>
    </>
  );
};

export default Main;
