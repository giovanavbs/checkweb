"use client";

import Botao from "./ui/Button";

const ItemAnotacao = ({ anotacao, onRemove, onDetails }) => {
  return (
    <li className="p-4 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <p className="font-medium text-gray-900">{anotacao.titulo}</p>

        <p className="text-sm text-gray-600 line-clamp-2">
          {anotacao.conteudo}
        </p>

        <p className="text-xs text-gray-500 mt-1">{anotacao.data}</p>
      </div>

      <div className="flex shrink-0 gap-2">
        <Botao
          variante="ghost"
          tamanho="sm"
          type="button"
          onClick={() => onDetails(anotacao)}
        >
          Ver detalhes
        </Botao>

        <Botao
          variante="danger"
          tamanho="sm"
          type="button"
          onClick={() => onRemove(anotacao.id)}
        >
          Excluir
        </Botao>
      </div>
    </li>
  );
};

export default ItemAnotacao;
