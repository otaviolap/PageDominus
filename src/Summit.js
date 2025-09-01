import React from 'react';
import './Summit.css';
import summitImage from './SegundaPágina.png';

function Summit() {
  return (
    <div className="summit">
      <div className="summit-container">
        <div className="summit-image">
          <div className="circle-image">
            <img src={summitImage} alt="Conference audience" />
          </div>
        </div>
        
        <div className="summit-content">
          <h1>Nossa Startup<br />condominial</h1>
          
          <div className="summit-description">
            <p>
              Acabamos de nascer com um propósito: transformar a gestão de condomínios em algo simples, prático e eficiente.<br />
            </p>
            <p>
              Nossa plataforma foi criada para facilitar a comunicação entre síndicos, moradores e administradoras, além de oferecer ferramentas que ajudam no controle financeiro, manutenção e organização do dia a dia do condomínio.
            </p>
            <p>
              Queremos modernizar a forma como os condomínios são administrados, trazendo mais transparência, agilidade e qualidade de vida para todos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summit;
