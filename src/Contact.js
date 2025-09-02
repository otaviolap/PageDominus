import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    telefone: '',
    estado: '',
    cidade: '',
    nomeCondominio: '',
    necessidades: ''
  });

  const [errors, setErrors] = useState({});
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [loadingCidades, setLoadingCidades] = useState(false);

  // Carregar estados do Brasil
  useEffect(() => {
    const carregarEstados = async () => {
      try {
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
        const data = await response.json();
        setEstados(data);
      } catch (error) {
        console.error('Erro ao carregar estados:', error);
      }
    };

    carregarEstados();
  }, []);

  // Carregar cidades baseado no estado selecionado
  const carregarCidades = async (estadoId) => {
    if (!estadoId) {
      setCidades([]);
      return;
    }

    setLoadingCidades(true);
    try {
      const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoId}/municipios?orderBy=nome`);
      const data = await response.json();
      setCidades(data);
    } catch (error) {
      console.error('Erro ao carregar cidades:', error);
      setCidades([]);
    } finally {
      setLoadingCidades(false);
    }
  };

  // Função para capitalizar nomes
  const capitalizeName = (name) => {
    return name
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Função para máscara de telefone brasileiro
  const formatPhoneNumber = (value) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (11) 99999-9999
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else {
      // Limita a 11 dígitos
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  // Validação de email
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Manipular mudanças nos campos
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'nomeCompleto' || name === 'nomeCondominio') {
      formattedValue = capitalizeName(value);
    } else if (name === 'telefone') {
      formattedValue = formatPhoneNumber(value);
    } else if (name === 'estado') {
      // Quando o estado muda, limpar a cidade e carregar novas cidades
      setFormData(prev => ({
        ...prev,
        estado: value,
        cidade: ''
      }));
      carregarCidades(value);
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));

    // Limpar erro quando o usuário começar a digitar
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validar formulário
  const validateForm = () => {
    const newErrors = {};

    // Nome completo obrigatório
    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = 'Nome completo é obrigatório';
    }

    // Email obrigatório e válido
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Email deve ter um formato válido';
    }

    // Telefone obrigatório e com formato correto
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone com WhatsApp é obrigatório';
    } else {
      const numbers = formData.telefone.replace(/\D/g, '');
      if (numbers.length !== 11) {
        newErrors.telefone = 'Telefone deve ter 11 dígitos (DDD + número)';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Enviar formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Formulário válido:', formData);
      alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
      // Aqui você pode adicionar a lógica para enviar os dados
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Entre em Contato</h2>
          <p>Transforme a gestão do seu condomínio com o PageDominus</p>
          
          <div className="info-item">
            <h3>📧 Email</h3>
            <p>contato@pagedominus.com</p>
          </div>
          
          <div className="info-item">
            <h3>📞 Telefone</h3>
            <p>(11) 99999-9999</p>
          </div>
          
          <div className="info-item">
            <h3>📍 Endereço</h3>
            <p>Rua Exemplo, 123<br />Centro, São Paulo/SP</p>
          </div>
          
          <div className="info-item">
            <h3>🕒 Horário de Atendimento</h3>
            <p>Segunda a Sexta: 9h às 18h<br />Sábado: 9h às 12h</p>
          </div>
        </div>
        
        <div className="contact-phone">
          <div className="phone-container">
            <img src="/celular.png" alt="Aplicativo PageDominus no celular" className="phone-image" />
            <div className="phone-content">
              <div className="contact-form-inside">
                <h3>DOMINUS</h3>
                <p>Preencha as informações abaixo para receber o contato de nossos consultores:</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-field">
                    <input 
                      type="text" 
                      name="nomeCompleto"
                      placeholder="Nome completo *" 
                      value={formData.nomeCompleto}
                      onChange={handleInputChange}
                      className={errors.nomeCompleto ? 'error' : ''}
                    />
                    {errors.nomeCompleto && <span className="error-message">{errors.nomeCompleto}</span>}
                  </div>
                  
                  <div className="form-field">
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Melhor email *" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className={errors.email ? 'error' : ''}
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                  </div>
                  
                  <div className="form-field">
                    <input 
                      type="tel" 
                      name="telefone"
                      placeholder="Telefone com WhatsApp *" 
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className={errors.telefone ? 'error' : ''}
                      maxLength="15"
                    />
                    {errors.telefone && <span className="error-message">{errors.telefone}</span>}
                  </div>
                  
                  <div className="form-field-row">
                    <div className="form-field-half">
                      <select 
                        name="estado"
                        value={formData.estado}
                        onChange={handleInputChange}
                        className={errors.estado ? 'error' : ''}
                      >
                        <option value="">Estado</option>
                        {estados.map(estado => (
                          <option key={estado.id} value={estado.id}>
                            {estado.sigla} - {estado.nome}
                          </option>
                        ))}
                      </select>
                      {errors.estado && <span className="error-message">{errors.estado}</span>}
                    </div>
                    
                    <div className="form-field-half">
                      <select 
                        name="cidade"
                        value={formData.cidade}
                        onChange={handleInputChange}
                        className={errors.cidade ? 'error' : ''}
                        disabled={!formData.estado || loadingCidades}
                      >
                        <option value="">
                          {loadingCidades ? 'Carregando...' : 'Cidade'}
                        </option>
                        {cidades.map(cidade => (
                          <option key={cidade.id} value={cidade.nome}>
                            {cidade.nome}
                          </option>
                        ))}
                      </select>
                      {errors.cidade && <span className="error-message">{errors.cidade}</span>}
                    </div>
                  </div>
                  
                  <div className="form-field">
                    <input 
                      type="text" 
                      name="nomeCondominio"
                      placeholder="Nome do seu condomínio" 
                      value={formData.nomeCondominio}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-field">
                    <textarea 
                      name="necessidades"
                      placeholder="Conte-nos mais sobre suas necessidades..." 
                      rows="3"
                      value={formData.necessidades}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-phone-btn">Enviar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
