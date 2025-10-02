import React from 'react';

function LembreteForm({ value, onChange, onSubmit, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="lembrete-form">
      <div className="input-group">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder="Digite seu lembrete..."
          disabled={isLoading}
          className="lembrete-input"
        />
        <button type="submit" disabled={isLoading} className="lembrete-btn">
          {isLoading ? 'Adicionando...' : 'Adicionar Lembrete'}
        </button>
      </div>
    </form>
  );
}

export default LembreteForm;