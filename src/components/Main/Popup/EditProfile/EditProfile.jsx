

const EditProfile = () => {
  return (    
    
         <form className="form__popup" noValidate>
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
            />
            <span className="jobInput-error form__input-error"></span>
          </fieldset>

          
          <button type="submit" className="form__submit-btn">Guardar</button>
        </form>

  )
}

export default EditProfile