import React from 'react';
import './proyectos.css';
import Data_dashboard from '../../assets/data.png';
import Social_network from '../../assets/social_network.png';
import SciFi_blog from '../../assets/sci-fi_blog.png';

const Proyectos = () =>
  <div id="proyectos">
    <h1 id="projects">Proyectos</h1>
    <section className="container">
      <div className="row center">
        <div>
          <div className="card">
            <img className="card-img-top" src={Data_dashboard} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Data Dashboard</h5>
              <p className="card-text">Proyecto creado para convertir data en información útil y eficaz como herramienta para el seguimiento y control de equipos de trabajo.</p>
              <div className="btn-center">
                <a target="_blank" rel="noopener noreferrer" href="https://soberanesmajo.github.io/cdmx-2018-06-bc-core-am-data-dashboard/src/index.html" className=""><button type="button" className="btn btn-outline-light">Demo</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/soberanesmajo/cdmx-2018-06-bc-core-am-data-dashboard" className=""><button type="button" className="btn btn-outline-light">Código</button></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <img className="card-img-top" src={SciFi_blog} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Sci-fi Blog!</h5>
              <p className="card-text">Blog de películas de ciencia ficción.</p>
              <div className="btn-center">
                <a target="_blank" rel="noopener noreferrer" href="https://soberanesmajo.github.io/cdmx20181-Track-FE-themovieapi/src/index.html" className=""><button type="button" className="btn btn-outline-light">Demo</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/soberanesmajo/cdmx20181-Track-FE-themovieapi" className=""><button type="button" className="btn btn-outline-light">Código</button></a>
              </div>
            </div>
          </div>
        </div>
        <div>

          <div className="card">
            <img className="card-img-top" src={Social_network} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Inside Out!</h5>
              <p className="card-text">Red social especializada en salud mental y emocional para jóvenes.</p>
              <div className="btn-center">
                <a target="_blank" rel="noopener noreferrer" href="n" className=""><button type="button" className="btn btn-outline-light">Demo</button></a>
                <a target="_blank" rel="noopener noreferrer" href="n" className=""><button type="button" className="btn btn-outline-light">Código</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

export default Proyectos;