import { useState } from "react";
import Popup from "./Popup/Popup";
import NewCard from "./Popup/NewCard/NewCard";
import EditAvatar from "./Popup/EditAvatar/EditAvatar";
import EditProfile from "./Popup/EditProfile/EditProfile";
import Card from "./components/Card/Card";

import profile from "../../images/profile.jpg";
import pencil from "../../images/pencil.jpg";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

const Main = () => {
  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };

  const editAvatarPopup = {
    title: "Cambiar foto de Perfil",
    children: <EditAvatar />,
  };

  const editProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <>
      {/*   Comienzo de contenido */}
      <main className="content">
        {/*   seccion de perfil */}
        <section className="profile">
          <div className="profile__container">
            {/*   contenedor para la imagen de usuario */}
            <div className="profile__image-container">
              <img
                src={profile}
                alt="imagen de perfil"
                className="profile__image"
              />

              <button
                className="profile__edit-button"
                onClick={() => handleOpenPopup(editAvatarPopup)}
              >
                <img src={pencil} alt="" className="profile__edit-icon" />
              </button>
            </div>

            {/*   contenedor de perfil de usuario */}
            <div className="profile__text-container">
              <p className="profile__name">Cousteau</p>

              {/*   boton para abrir el formulario */}
              <button
                className="profile__btn"
                onClick={() => handleOpenPopup(editProfilePopup)}
              ></button>
              <p className="profile__job">Explorador</p>
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
                key={card._id}
                card={card}
                handleOpenPopup={handleOpenPopup}
              />
            ))}
          </div>
        </section>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </>
  );
};

export default Main;
