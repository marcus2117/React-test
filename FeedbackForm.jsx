import React, { useState } from 'react';
import './FeedbackForm.css';

/** * FeedbackForm Component
 * Objetivo: Praticar Hooks (useState) e Manipulação de Eventos
 */

const FeedbackForm = () => {
  // --------------------------------------------------------
  // 01. Definição de Estados (Hooks)
  // --------------------------------------------------------
  const [nome, setNome]       = useState('');
  const [email, setEmail]     = useState('');
  const [comentario, setComentario] = useState('');

  // --------------------------------------------------------
  // 02. Lógica de Envio (Submit)
  // --------------------------------------------------------
  const handleSubmit = (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    // Validação simples
    if (!nome || !email || !comentario) {
      alert('Por favor, preencha todos os campos antes de enviar! ✍️');
      return;
    }

    // Exibição dos dados
    alert(`
      ✅ Feedback Enviado com Sucesso!
      -------------------------------
      Nome: ${nome}
      Email: ${email}
      Comentário: ${comentario}
    `);

    // Opcional: Limpar o formulário após enviar
    setNome('');
    setEmail('');
    setComentario('');
  };

  return (
    <section className="feedback-wrapper">
      <div className="feedback-card">
        <header className="feedback-header">
          <h2>Feedback do Usuário</h2>
          <p>Sua opinião é fundamental para o nosso Hub.</p>
        </header>

        <form onSubmit={handleSubmit} className="form-container">
          
          {/* Campo: Nome */}
          <div className="form-group">
            <label>Nome Completo</label>
            <input 
              type="text" 
              placeholder="Digite seu nome..."
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          {/* Campo: Email */}
          <div className="form-group">
            <label>E-mail</label>
            <input 
              type="email" 
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Campo: Comentário */}
          <div className="form-group">
            <label>Comentário</label>
            <textarea 
              rows="4"
              placeholder="Conte-nos sua experiência..."
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
            />
          </div>

          {/* Botão de Ação */}
          <button type="submit" className="btn-submit">
            Enviar Feedback
          </button>

        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;

