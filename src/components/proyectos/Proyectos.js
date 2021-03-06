import React from 'react';
import './proyectos.css';
import Data_dashboard from '../../assets/data.png';
import Social_network from '../../assets/social_network.png';
import cat from '../../assets/gato.png';

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
            <img className="card-img-top" src={Social_network} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Inside-Out</h5>
              <p className="card-text">Red social especializada en salud mental y emocional para jóvenes.</p>
              <div className="btn-center">
                <a target="_blank" rel="noopener noreferrer" href="https://soberanesmajo.github.io/cdmx-2018-06-bc-core-am-social-network/src/index.html" className=""><button type="button" className="btn btn-outline-light">Demo</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/soberanesmajo/cdmx-2018-06-bc-core-am-social-network" className=""><button type="button" className="btn btn-outline-light">Código</button></a>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <img className="card-img-top" src={cat} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Tic tac toe game!</h5>
              <p className="card-text">El clásico juego de Gato elaborado con React Native. Disponible para Android y iOS.</p>
              <div className="btn-center">
                <a target="_blank" rel="noopener noreferrer" href="https://expo.io/@majosoberanes/native-game" className=""><button type="button" className="btn btn-outline-light">Demo</button></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/soberanesmajo/cdmx-2018-06-bc-core-am-tic-tac-toe-App-Native" className=""><button type="button" className="btn btn-outline-light">Código</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

export default Proyectos;