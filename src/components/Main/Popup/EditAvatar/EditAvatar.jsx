import { useRef,useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";
const EditAvatar = () => {

  const avatarRef = useRef();
  const {handleUpdateAvatar} = useContext(CurrentUserContext);

   const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateAvatar(avatarRef.current.value);
  };


  return (
    <form className="form__popup" noValidate onSubmit={handleSubmit}>
      <fieldset className="form__date">
        <input
          type="url"
          name="nameInput"
          id="nameInput"         
          className="form__input"
          placeholder="Ingresa la nueva Url para tu imagen"
          required
          ref={avatarRef}
         
        />

        <span className="nameInput-error form__input-error"></span>
      </fieldset>

      <button type="submit" className="form__submit-btn">Guardar</button>
    </form>
  );
};

export default EditAvatar;
