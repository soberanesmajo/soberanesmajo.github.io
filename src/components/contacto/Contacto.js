import React from 'react';
import './contacto.css';

const Contacto = () =>
  <footer className="container-fluid contacto">
    <h1 className="contacto-rosa">Contacto</h1>
    <p className="pregunta-contacto">Si deseas más información, contáctame.</p>
    <div className="row">
      <i className="font fas fa-envelope-square"></i>
      <i className="font fas fa-phone-square"></i>
      <i className="font fab fa-github-square"></i>
      <i className="font fab fa-linkedin"></i>
    </div>
  </footer>

export default Contacto;