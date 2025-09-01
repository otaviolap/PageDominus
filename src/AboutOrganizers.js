import React from 'react';
import './AboutOrganizers.css';

function AboutOrganizers() {
  return (
    <div className="about-organizers">
      <div className="organizers-container">
        <div className="organizers-images">
          <div className="organizer-item first">
            <div className="organizer-image">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="CEO 1" />
            </div>
            <div className="organizer-info">
              <h3>Tiago Dutra Galvão</h3>
              <p className="role">CEO & Fundador</p>
              <p className="description">Especialista em tecnologia condominial com 15 anos de experiência no setor.</p>
            </div>
          </div>
          
          <div className="organizer-item second">
            <div className="organizer-image">
              <img src="/otavio.png" alt="CEO 2" />
            </div>
            <div className="organizer-info">
              <h3>Otávio Laplechade Brandi</h3>
              <p className="role">CTO & Fundador</p>
              <p className="description">Arquiteta de software com expertise em sistemas de gestão predial e IoT.</p>
            </div>
          </div>
          
          <div className="organizer-item third">
            <div className="organizer-image">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="CEO 3" />
            </div>
            <div className="organizer-info">
              <h3>João Victor Brazilliano</h3>
              <p className="role">COO & Fundador</p>
              <p className="description">Especialista em operações e relacionamento com síndicos e administradoras.</p>
            </div>
          </div>
        </div>
        
        <div className="organizers-content">
          <h1>Sobre<br />Nosso Time</h1>
          
          <div className="organizers-description">
            <p>
              The Mega Media Summit is presented by InnoBlue<br />
              Events in partnership with the Global Media Alliance.<br />
              Together, they have over a decade of experience in<br />
              crafting relevant and dynamic events for professional<br />
              learning and networking.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default AboutOrganizers;
