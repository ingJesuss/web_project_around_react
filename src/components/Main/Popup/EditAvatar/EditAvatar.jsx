//ajustar los inputs segun el popup que se abra URL porque es la imagen del perfil
const EditAvatar = () => {
  return (
    <form className="form__popup" noValidate>
      <fieldset className="form__date">
        <input
          type="url"
          name="nameInput"
          id="nameInput"         
          className="form__input"
          placeholder="Ingresa la nueva Url para tu imagen"
         
        />

        <span className="nameInput-error form__input-error"></span>
      </fieldset>

      <button type="submit" className="form__submit-btn">Guardar</button>
    </form>
  );
};

export default EditAvatar;
