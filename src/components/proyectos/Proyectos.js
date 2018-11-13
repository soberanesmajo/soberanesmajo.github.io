import React from 'react';
import './proyectos.css';
import Data_dashboard from '../../assets/data_dashboard.png';
import Social_network from '../../assets/social_network.png';
import SciFi_blog from '../../assets/sci-fi_blog.png';

const Proyectos = () =>
  <div>
    <h1 id="projects">Proyectos</h1>
    <section className="container">
      <div className="row center">
        <div>
          <div className="card">
            <img className="card-img-top" src={Data_dashboard} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="n" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <img className="card-img-top" src={Social_network} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="n" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

        <div>
          <div className="card">
            <img className="card-img-top" src={SciFi_blog} alt="imagen del proyecto"></img>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="n" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>

export default Proyectos;