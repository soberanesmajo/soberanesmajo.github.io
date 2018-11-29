import React from 'react';
import './hola.css';
import Foto from '../foto/Foto';

const Hola = () =>
  <div id="hola" className="container">
    <div className="row">
      <section className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <Foto/>
      </section>
      <section className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
        <h1 id="hi">¡Hola!</h1>
        <p id = "text">
        Soy una desarrolladora web que disfruta de crear a través de la tecnología. Entusiasta del autoaprendizaje y fanática del machine learning. Me gusta el trabajo en equipo porque me permite aprender a través de personas con diversos perfiles. Practico la metodología ágil y considero la comunicación eficaz lo más importante para la realización de un proyecto. Amante de la pizza, los robots y la ciencia ficción.
        </p>
        <div className="btn-cv">
          <a href="https://github.com/soberanesmajo/soberanesmajo.github.io/raw/ramamajo/src/assets/CV.pdf" download="Majo_Soberanes_CV"><button type="button" className="btn btn-outline-light">Descarga CV</button></a>
          <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1O87XtlmSLVLO9obbXp_mr04hJamVeBru/view"><button type="button" className="btn btn-outline-light">Ver CV</button></a>
        </div>
      </section>
    </div>
  </div>

export default Hola;