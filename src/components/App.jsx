import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Popup from "./Main/Popup/Popup";
import Main from "./Main/Main";

import Footer from "./Footer/Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import { api } from "../utils/api";

const App = () => {
  /* Popup */
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

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

  const handleAddPlaceSubmit = async (data) => {
    try{
      const newCard = await api.postNewCard(data);
      setCards([newCard, ...cards]);
      handleClosePopup();
    }catch{
      console.error("Error al cargar imagen", err)
    }
  }

  
  

  /* usuario */
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const handleUpdateUser = async (data) => {
    try {
      const updateUser = await api.patchEditProfile(data);
      setCurrentUser(updateUser);
      handleClosePopup();
    } catch (err) {
      console.error("Error al actualizar usuario", err);
    }
  };

  /* edit-avatar */

  const handleUpdateAvatar = async (avatarUrl) => {
    try {
      const updateUser = await api.setUserAvatar({avatar : avatarUrl});
      setCurrentUser(updateUser);
      handleClosePopup();
    }catch(err){
      console.error("Error al actualizar avatar", err);
    }
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser,handleUpdateAvatar }}>
        <Header />
        <Main
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
          cards={cards}
          popup={popup}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <Footer />
        
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
