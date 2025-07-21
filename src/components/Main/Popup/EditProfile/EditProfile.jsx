import { useState, useContext } from "react";
import CurrentUserContext from "../../../../contexts/CurrentUserContext";

const EditProfile = () => {
  const userContext = useContext(CurrentUserContext);
  const { currentUser, handleUpdateUser } = userContext;

  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateUser({ name, about: description });
  };

  return (
    <form className="form__popup" 
      noValidate 
      onSubmit={handleSubmit}>
      <fieldset className="form__date">
        <input
          type="text"
          name="nameInput"
          id="nameInput"
          placeholder="Jesus"
          className="form__input"
          minLength={2}
          maxLength={40}
          required
          value={name}
          onChange={handleNameChange}
        />
        <span className="nameInput-error form__input-error"></span>

        <input
          type="text"
          name="jobInput"
          id="jobInput"
          placeholder="Ingeniero"
          className="form__input"
          minLength={2}
          maxLength={200}
          required
          value={description}
          onChange={handleDescriptionChange}
        />
        <span className="jobInput-error form__input-error"></span>
      </fieldset>

      <button type="submit" className="form__submit-btn">
        Guardar
      </button>
    </form>
  );
};

export default EditProfile;
