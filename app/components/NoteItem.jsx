"use client";

import Button from "./ui/Button";

const NoteItem = ({ note, onRemove, onDetails }) => {
  return (
    <li className="p-4 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="font-medium text-gray-900">{note.titulo}</p>
        <p className="text-sm text-gray-600 line-clamp-2">{note.conteudo}</p>
        <p className="text-xs text-gray-500 mt-1">{note.data}</p>
      </div>
      <div className="flex shrink-0 gap-2">
        <Button variant="ghost" size="sm" type="button" onClick={() => onDetails(note)}>
          Ver detalhes
        </Button>
        <Button variant="danger" size="sm" type="button" onClick={() => onRemove(note.id)}>
          Excluir
        </Button>
      </div>
    </li>
  );
};

export default NoteItem;
