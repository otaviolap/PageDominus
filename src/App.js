import React from 'react';
import './App.css';
import Footer from './Footer';
import Contact from './Contact';
import backgroundImage from './background.png';
import Summit from './Summit';
import SummitHighlights from './SummitHighlights';
import AboutOrganizers from './AboutOrganizers';
import AppFeatures from './AppFeatures';

function App() {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact-section');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
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
            <button className="cta-btn" onClick={scrollToContact}>Saiba mais</button>
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
      
      {/* Linha divisória */}
      <div style={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, #535151ff 0%, #ffffffff 50%, #535151ff 100%)',
        margin: '0',
      }}></div>
      
      {/* Sexta seção - Contact */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
