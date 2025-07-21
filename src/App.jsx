import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Popup from "./components/Main/Popup/Popup";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { api } from "./utils/api";

const App = () => {
  /* Popup */
  const [popup, setPopup] = useState(null);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

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

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
        <Header />
        <Main
          handleOpenPopup={handleOpenPopup}
          handleClosePopup={handleClosePopup}
        />
        <Footer />
        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </CurrentUserContext.Provider>
    </div>
  );
};

export default App;
