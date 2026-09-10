"use client";

import { useState } from "react";
import Botao from "./ui/Button";
import Cartao from "./ui/Card";

const FormularioAnotacao = ({ onAdd }) => {
  const [formulario, setFormulario] = useState({
    titulo: "",
    conteudo: "",
  });

  const alterarFormulario = (evento) => {
    const { name, value } = evento.target;

    setFormulario((anterior) => ({
      ...anterior,
      [name]: value,
    }));
  };

  const enviarFormulario = (evento) => {
    evento.preventDefault();

    if (!formulario.titulo.trim() || !formulario.conteudo.trim()) return;

    onAdd({
      ...formulario,
      id: Date.now(),
      data: new Date().toLocaleString("pt-BR"),
    });

    setFormulario({
      titulo: "",
      conteudo: "",
    });
  };

  return (
    <Cartao titulo="Nova anotação">
      <form onSubmit={enviarFormulario} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Título
          </label>

          <input
            name="titulo"
            className="w-full border rounded px-3 py-2 text-gray-900"
            value={formulario.titulo}
            onChange={alterarFormulario}
            placeholder="Digite o título"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">
            Conteúdo
          </label>

          <textarea
            name="conteudo"
            className="w-full border rounded px-3 py-2 text-gray-900 min-h-32 resize-y"
            value={formulario.conteudo}
            onChange={alterarFormulario}
            placeholder="Escreva sua anotação"
            required
          />
        </div>

        <Botao type="submit">Adicionar anotação</Botao>
      </form>
    </Cartao>
  );
};

export default FormularioAnotacao;
