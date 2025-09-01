import React from 'react';
import './App.css';
import backgroundImage from './background.png';
import Summit from './Summit';
import SummitHighlights from './SummitHighlights';
import AboutOrganizers from './AboutOrganizers';
import AppFeatures from './AppFeatures';

function App() {
  const scrollToSummit = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="App">
      {/* Primeira seção - Página inicial */}
      <div className="section home-section">
        <div className="background-image" style={{backgroundImage: `url(${backgroundImage})`}}></div>
        <div className="container">
          <div className="logo">DOMINUS</div>
          <div className="content">
            <h1>
              Gestão de<br />
              Condomínio<br />
              do Futuro
            </h1>
            <div className="subtitle">
              REVOLUCIONE A ADMINISTRAÇÃO DO SEU CONDOMÍNIO COM<br />
              NOSSA PLATAFORMA COMPLETA.<br />
            </div>
            <button className="cta-btn" onClick={scrollToSummit}>Saiba mais</button>
          </div>
        </div>
      </div>
      
      {/* Segunda seção - Summit */}
      <Summit />
      
      {/* Terceira seção - Summit Highlights */}
      <SummitHighlights />
      
      {/* Quarta seção - App Features */}
      <AppFeatures />
      
      {/* Quinta seção - About Organizers */}
      <AboutOrganizers />
    </div>
  );
}

export default App;
