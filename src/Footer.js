import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        width: '100%',
        backgroundColor: 'black',
        color: '#fff',
        padding: '60px 20px 30px',
        fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
        borderTop: '1px solid #333',
      }}
    >
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '40px',
        marginBottom: '40px',
      }}>
        {/* Logo e Descrição */}
        <div style={{ textAlign: 'left' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '15px',
            background: 'linear-gradient(135deg, #60a5fa, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontFamily: '"Orbitron", "Segoe UI", sans-serif',
          }}>
            Dominus
          </h2>
          <p style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            color: '#b3b3b3',
            marginBottom: '20px',
            maxWidth: '300px',
          }}>
            Revolucionando a gestão condominial com tecnologia inteligente e soluções inovadoras.
          </p>
        </div>

        {/* Contato */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#60a5fa',
          }}>
            Contato
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <p style={{
              fontSize: '0.95rem',
              color: '#d1d1d1',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ color: '#60a5fa' }}>📍</span>
              Rua Guilherme Farel, 670. Londrina-PR
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#d1d1d1',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ color: '#60a5fa' }}>📞</span>
              (43) 99921-9978
            </p>
            <p style={{
              fontSize: '0.95rem',
              color: '#d1d1d1',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}>
              <span style={{ color: '#60a5fa' }}>✉️</span>
              atendimentodominusbrasil@gmail.com
            </p>
          </div>
        </div>

        {/* Links Rápidos */}
        <div style={{ textAlign: 'left' }}>
          <h3 style={{
            fontSize: '1.3rem',
            fontWeight: '600',
            marginBottom: '20px',
            color: '#60a5fa',
          }}>
            Links Rápidos
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              { name: 'Sobre Nós', section: 'summit' },
              { name: 'Funcionalidades', section: 'app-features' },
              { name: 'Destaques', section: 'summit-highlights' },
              { name: 'Equipe', section: 'about-organizers' }
            ].map((link) => (
              <a
                key={link.name}
                href={`#${link.section}`}
                style={{
                  color: '#d1d1d1',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease',
                  padding: '2px 0',
                }}
                onMouseOver={(e) => e.target.style.color = '#60a5fa'}
                onMouseOut={(e) => e.target.style.color = '#d1d1d1'}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Linha divisória e copyright */}
      <div style={{
        borderTop: '1px solid #333',
        paddingTop: '30px',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <p style={{
            fontSize: '0.9rem',
            color: '#888',
            margin: 0,
          }}>
            &copy; 2025 Dominus. Todos os direitos reservados.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
          }}>
            <a href="#" style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.color = '#60a5fa'}
            onMouseOut={(e) => e.target.style.color = '#888'}>
              Política de Privacidade
            </a>
            <a href="#" style={{
              color: '#888',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'color 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.color = '#60a5fa'}
            onMouseOut={(e) => e.target.style.color = '#888'}>
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
