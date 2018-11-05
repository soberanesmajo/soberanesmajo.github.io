import React from 'react';
import './navbar.css';

const Navbar = () =>
  <ul className="nav justify-content-center">
    <li className="nav-item">
      <a className="nav-link active" href="Hola">¡Hola!</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="Proyectos">Proyectos</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="Habilidades">Habilidades</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="Contacto">Contacto</a>
    </li>
  </ul>

export default Navbar;