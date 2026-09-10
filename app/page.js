"use client";

import { useEffect, useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import Button from "./components/ui/Button";

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch {
        localStorage.removeItem("notes");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const handleAdd = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };

  const handleRemove = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    if (selectedNote?.id === id) {
      setSelectedNote(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Meu Bloco de Anotações
            </h1>
            <p className="text-sm text-gray-600">
              Crie, adicione, exclua e consulte suas anotações.
            </p>
          </div>
          <span className="text-sm font-medium text-gray-700">
            {notes.length} {notes.length === 1 ? "anotação" : "anotações"}
          </span>
        </header>

        <NoteForm onAdd={handleAdd} />

        <NoteList
          items={notes}
          onRemove={handleRemove}
          onDetails={setSelectedNote}
        />

        {selectedNote && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            onClick={() => setSelectedNote(null)}
          >
            <div
              className="w-full max-w-3xl rounded bg-white shadow"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="font-medium text-gray-900">
                  Detalhes da anotação
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  type="button"
                  onClick={() => setSelectedNote(null)}
                >
                  Fechar
                </Button>
              </div>
              <div className="space-y-4 p-4">
                <div>
                  <p className="block text-sm font-medium mb-1 text-gray-700">Título</p>
                  <p className="text-gray-900">{selectedNote.titulo}</p>
                </div>
                <div>
                  <p className="block text-sm font-medium mb-1 text-gray-700">Conteúdo</p>
                  <p className="whitespace-pre-wrap text-gray-700">{selectedNote.conteudo}</p>
                </div>
                <div>
                  <p className="block text-sm font-medium mb-1 text-gray-700">Data</p>
                  <p className="text-sm text-gray-600">{selectedNote.data}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
