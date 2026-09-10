"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Card from "./ui/Card";

const NoteForm = ({ onAdd }) => {
  const [form, setForm] = useState({ titulo: "", conteudo: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo.trim() || !form.conteudo.trim()) return;

    onAdd({
      ...form,
      id: Date.now(),
      data: new Date().toLocaleString("pt-BR"),
    });

    setForm({ titulo: "", conteudo: "" });
  };

  return (
    <Card title="Nova anotação">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Título</label>
          <input
            name="titulo"
            className="w-full border rounded px-3 py-2 text-gray-900"
            value={form.titulo}
            onChange={handleChange}
            placeholder="Digite o título"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700">Conteúdo</label>
          <textarea
            name="conteudo"
            className="w-full border rounded px-3 py-2 text-gray-900 min-h-32 resize-y"
            value={form.conteudo}
            onChange={handleChange}
            placeholder="Escreva sua anotação"
            required
          />
        </div>
        <Button type="submit">Adicionar anotação</Button>
      </form>
    </Card>
  );
};

export default NoteForm;
