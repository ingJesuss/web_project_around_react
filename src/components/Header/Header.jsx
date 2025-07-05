import logo from "../../images/logo.jpg";

const Header = () => {
  return (
    
     <header className="header">
        <div className="header__container">
          <img
            src={logo}
            alt="logo the Around the U.S. "
            className="header__logo"
          />
        </div>
      </header>

  )
}

export default Header