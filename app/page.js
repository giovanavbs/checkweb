"use client";

import { useEffect, useState } from "react";
import FormularioAnotacao from "./components/NoteForm";
import ListaAnotacoes from "./components/NoteList";
import Botao from "./components/ui/Button";

const PaginaInicial = () => {
  const [anotacoes, setAnotacoes] = useState([]);
  const [anotacaoSelecionada, setAnotacaoSelecionada] = useState(null);
  const [armazenamentoCarregado, setArmazenamentoCarregado] = useState(false);

  useEffect(() => {
    const anotacoesSalvas = localStorage.getItem("anotacoes");

    if (anotacoesSalvas) {
      try {
        setAnotacoes(JSON.parse(anotacoesSalvas));
      } catch {
        localStorage.removeItem("anotacoes");
      }
    }

    setArmazenamentoCarregado(true);
  }, []);

  useEffect(() => {
    if (!armazenamentoCarregado) return;

    localStorage.setItem("anotacoes", JSON.stringify(anotacoes));
  }, [anotacoes, armazenamentoCarregado]);

  const adicionarAnotacao = (novaAnotacao) => {
    setAnotacoes((anotacoesAnteriores) => [
      ...anotacoesAnteriores,
      novaAnotacao,
    ]);
  };

  const excluirAnotacao = (id) => {
    setAnotacoes((anotacoesAnteriores) =>
      anotacoesAnteriores.filter((anotacao) => anotacao.id !== id)
    );

    if (anotacaoSelecionada?.id === id) {
      setAnotacaoSelecionada(null);
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
            {anotacoes.length}{" "}
            {anotacoes.length === 1 ? "anotação" : "anotações"}
          </span>
        </header>

        <FormularioAnotacao onAdd={adicionarAnotacao} />

        <ListaAnotacoes
          itens={anotacoes}
          onRemove={excluirAnotacao}
          onDetails={setAnotacaoSelecionada}
        />

        {anotacaoSelecionada && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-6"
            onClick={() => setAnotacaoSelecionada(null)}
          >
            <div
              className="w-full max-w-3xl rounded bg-white shadow"
              onClick={(evento) => evento.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="font-medium text-gray-900">
                  Detalhes da anotação
                </h2>

                <Botao
                  variante="ghost"
                  tamanho="sm"
                  type="button"
                  onClick={() => setAnotacaoSelecionada(null)}
                >
                  Fechar
                </Botao>
              </div>

              <div className="space-y-4 p-4">
                <div>
                  <p className="block text-sm font-medium mb-1 text-gray-700">
                    Título
                  </p>
                  <p className="text-gray-900">
                    {anotacaoSelecionada.titulo}
                  </p>
                </div>

                <div>
                  <p className="block text-sm font-medium mb-1 text-gray-700">
                    Conteúdo
                  </p>
                  <p className="whitespace-pre-wrap text-gray-700">
                    {anotacaoSelecionada.conteudo}
                  </p>
                </div>

                <div>
                  <p className="block text-sm font-medium mb-1 text-gray-700">
                    Data
                  </p>
                  <p className="text-sm text-gray-600">
                    {anotacaoSelecionada.data}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaginaInicial;
