import React from 'react';
import './SummitHighlights.css';

function SummitHighlights() {
  return (
    <div className="summit-highlights">
      <div className="highlights-container">
        <div className="highlights-left">
          <h1>Destaques<br />da Nossa<br />Startup</h1>
        </div>
        
        <div className="highlights-right">
          <div className="highlight-card">
            <div className="highlight-number">01</div>
            <div className="highlight-content">
              <h3>Talks & Open Forums</h3>
              <p>The industry's biggest names share their insights</p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-number">02</div>
            <div className="highlight-content">
              <h3>Mini Masterclasses</h3>
              <p>Expert-led workshops to supercharge your career</p>
            </div>
          </div>
          
          <div className="highlight-card">
            <div className="highlight-number">03</div>
            <div className="highlight-content">
              <h3>Seamless Networking</h3>
              <p>Connect with thousands of media practitioners on our platform</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummitHighlights;
