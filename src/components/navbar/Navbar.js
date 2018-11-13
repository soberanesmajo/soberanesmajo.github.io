import React from 'react';
import './navbar.css';

const Navbar = () =>
  <ul className="nav justify-content-center position-fixed">
    <li className="nav-item">
      <a className="nav-link" href="#hola">¡Hola!</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#proyectos">Proyectos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#habilidades">Habilidades</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#contacto">Contacto</a>
    </li>
  </ul>

export default Navbar;