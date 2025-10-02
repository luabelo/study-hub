import React, { useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

function LembreteCard({ lembrete, onObservacaoChange, onObservacaoSubmit, onDelete, onEdit, onPrioridadeChange }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(lembrete.titulo);

  const handleEdit = () => {
    onEdit(lembrete.id, editValue);
    setIsEditing(false);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  return (
    <div className={`card priority-${lembrete.prioridade}`}>
      <div className="card-header">
        {isEditing ? (
          <div className="edit-container">
            <input
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="edit-input"
            />
            <div className="edit-actions">
              <button className="icon-btn save" onClick={handleEdit}>
                <CheckIcon fontSize="small" />
              </button>
              <button className="icon-btn cancel" onClick={() => setIsEditing(false)}>
                <CloseIcon fontSize="small" />
              </button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="card-title">{lembrete.titulo}</h3>
            <div className="card-actions">
              <select
                value={lembrete.prioridade}
                onChange={(e) => onPrioridadeChange(lembrete.id, e.target.value)}
                className="priority-select"
              >
                <option value="baixa">Baixa</option>
                <option value="normal">Normal</option>
                <option value="alta">Alta</option>
              </select>
              <button className="icon-btn edit" onClick={() => setIsEditing(true)}>
                <EditOutlinedIcon fontSize="small" />
              </button>
              <button className="icon-btn delete" onClick={() => onDelete(lembrete.id)}>
                <DeleteOutlineIcon fontSize="small" />
              </button>
            </div>
          </>
        )}
      </div>

      <div className="card-content">
        <span className="timestamp">{formatDate(lembrete.dataCriacao)}</span>
        
        <div className="observacoes">
          {lembrete.observacoes.map((obs, index) => (
            <div key={index} className="observacao">
              <p>{obs.texto}</p>
              <small>{formatDate(obs.dataCriacao)}</small>
            </div>
          ))}
        </div>

        <div className="nova-observacao">
          <input
            type="text"
            value={lembrete.observacaoInput}
            onChange={(e) => onObservacaoChange(lembrete.id, e.target.value)}
            placeholder="Adicionar observação..."
          />
          <button onClick={() => onObservacaoSubmit(lembrete.id)}>
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LembreteCard;