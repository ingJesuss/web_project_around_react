
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import CurrentUserContext from "./contexts/CurrentUserContext";
import { api } from "./utils/api";



const App = () => {

  const [currentUser,setCurrentUser]=useState({});

  useEffect(()=> {
    api.getUserInfo()
    .then((userData) => {
      setCurrentUser(userData)
    })
    .catch((err) =>{
      console.error(err);
    })
    
  },[])

 
  return (

    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

     <Header/>
     <Main/>
     <Footer/>
          
      </CurrentUserContext.Provider>

    
    </div>
  );
};

export default App;
