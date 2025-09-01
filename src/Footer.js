import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        width: '100%',
        minHeight: '200px',
        backgroundImage: "url('" + process.env.PUBLIC_URL + "/building-bg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div className="footer-content" style={{
        background: 'rgba(0, 0, 0, 0.6)',
        padding: '30px 40px',
        borderRadius: '10px',
        textAlign: 'center',
      }}>
        <h2>PageDominus</h2>
        <p>Endereço: Rua Exemplo, 123, Centro, Cidade/UF</p>
        <p>Telefone: (99) 99999-9999</p>
        <p>Email: contato@pagedominus.com</p>
        <p>&copy; 2025 PageDominus. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
