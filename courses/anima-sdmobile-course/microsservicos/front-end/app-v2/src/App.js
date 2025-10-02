import React, { useState, useEffect } from 'react';
import './App.css';
import LembreteForm from './components/LembreteForm';
import LembreteCard from './components/LembreteCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [lembreteInput, setLembreteInput] = useState('');
  const [lembretes, setLembretes] = useState(() => {
    const saved = localStorage.getItem('lembretes');
    return saved ? JSON.parse(saved) : [];
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('lembretes', JSON.stringify(lembretes));
  }, [lembretes]);

  const adicionarLembrete = () => {
    try {
      setIsLoading(true);
      if (!lembreteInput.trim()) {
        toast.warning('Por favor, digite um lembrete');
        return;
      }
      const novoLembrete = {
        id: Date.now(),
        titulo: lembreteInput,
        observacoes: [],
        observacaoInput: '',
        dataCriacao: new Date().toISOString(),
        prioridade: 'normal',
        categoria: 'geral'
      };
      setLembretes([...lembretes, novoLembrete]);
      setLembreteInput('');
      toast.success('Lembrete adicionado com sucesso!');
    } catch (error) {
      toast.error('Erro ao adicionar lembrete');
    } finally {
      setIsLoading(false);
    }
  };

  const deletarLembrete = (id) => {
    try {
      setLembretes(lembretes.filter(lembrete => lembrete.id !== id));
      toast.success('Lembrete removido com sucesso!');
    } catch (error) {
      toast.error('Erro ao remover lembrete');
    }
  };

  const editarLembrete = (id, novoTitulo) => {
    try {
      setLembretes(lembretes.map(lembrete =>
        lembrete.id === id ? { ...lembrete, titulo: novoTitulo } : lembrete
      ));
      toast.success('Lembrete atualizado com sucesso!');
    } catch (error) {
      toast.error('Erro ao atualizar lembrete');
    }
  };

  const atualizarObservacaoInput = (id, valor) => {
    setLembretes(lembretes.map(lembrete =>
      lembrete.id === id ? { ...lembrete, observacaoInput: valor } : lembrete
    ));
  };

  const adicionarObservacao = (id) => {
    try {
      setLembretes(lembretes.map(lembrete => {
        if (lembrete.id === id && lembrete.observacaoInput.trim()) {
          return {
            ...lembrete,
            observacoes: [...lembrete.observacoes, {
              id: Date.now(),
              texto: lembrete.observacaoInput,
              dataCriacao: new Date().toISOString()
            }],
            observacaoInput: ''
          };
        }
        return lembrete;
      }));
      toast.success('Observação adicionada com sucesso!');
    } catch (error) {
      toast.error('Erro ao adicionar observação');
    }
  };

  const atualizarPrioridade = (id, novaPrioridade) => {
    setLembretes(lembretes.map(lembrete =>
      lembrete.id === id ? { ...lembrete, prioridade: novaPrioridade } : lembrete
    ));
  };

  return (
    <div className="container">
      <h1>Meus Lembretes</h1>
      <LembreteForm
        value={lembreteInput}
        onChange={e => setLembreteInput(e.target.value)}
        onSubmit={adicionarLembrete}
        isLoading={isLoading}
      />

      <div className="cards">
        {lembretes.map(lembrete => (
          <LembreteCard
            key={lembrete.id}
            lembrete={lembrete}
            onObservacaoChange={atualizarObservacaoInput}
            onObservacaoSubmit={adicionarObservacao}
            onDelete={deletarLembrete}
            onEdit={editarLembrete}
            onPrioridadeChange={atualizarPrioridade}
          />
        ))}
      </div>
      <ToastContainer position="bottom-right" />
    </div>
  );
}

export default App;