const Popup = ({onClose, title, children }) => {
  return (
    
    <section className="form">
      <div className="form__overlay"></div>

      <div className="form__container">  
        
           
        <h3 className="form__title"> {title} </h3>



        <button className="form__close-btn" onClick={onClose}></button>

        {children}
        
      </div>
    </section>
  );
};

export default Popup;
