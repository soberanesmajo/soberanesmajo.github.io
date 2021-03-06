import React from 'react';
import './contacto.css';

const Contacto = () =>
  <footer id="contacto" className="container-fluid contacto">
    <div className="row">
      <a className="linkC" target="_blank" rel="noopener noreferrer" href="mailto:soberanesmajo@gmail.com"><i className="font fas fa-envelope-square"></i></a>
      <a className="linkC" target="_blank" rel="noopener noreferrer" href="https://github.com/soberanesmajo"><i className="font fab fa-github-square"></i></a>
      <a className="linkC" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/soberanesmajo/"><i className="font fab fa-linkedin"></i></a>
      <a className="linkC" target="_blank" rel="noopener noreferrer" href="https://twitter.com/MajoSoberanes"><i className="font fab fa-twitter-square"></i></a>
    </div>
  </footer>

export default Contacto;