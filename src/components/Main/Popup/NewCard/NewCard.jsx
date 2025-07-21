
import { useState } from "react";
const NewCard = ({onAddPlaceSubmit}) => {
   const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPlaceSubmit({ name, link });
  };

  return (    
    
         <form className="form__popup" noValidate onSubmit={handleSubmit}>
          <fieldset className="form__date">
            <input
              type="text"
              name="nameInput"
              id="nameInput"
              placeholder="New York"
              minLength={2}
              maxLength={30}
              className="form__input"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <span className="nameInput-error form__input-error"></span>

            <input
              type="url"
              name="jobInput"
              id="jobInput"
              placeholder="Url:https://tse3.mm.bing.net/th/id/OIP.-7M0KUhS8s1RLxTruVot-AHaHa?pid=Api&P=0&h=180"
              className="form__input"
              required
              value={link}
              onChange={e => setLink(e.target.value)}
            />
            <span className="jobInput-error form__input-error"></span>
          </fieldset>

          
          <button type="submit" className="form__submit-btn">Guardar</button>
        </form>

  )
}

export default NewCard