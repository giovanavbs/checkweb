import ItemAnotacao from "./NoteItem";
import Cartao from "./ui/Card";

const ListaAnotacoes = ({ itens, onRemove, onDetails }) => {
  return (
    <Cartao titulo={`Anotações (${itens.length})`}>
      <ul className="divide-y -mx-4">
        {itens.length === 0 ? (
          <li className="p-4 text-gray-500">
            Nenhuma anotação encontrada
          </li>
        ) : (
          itens.map((anotacao) => (
            <ItemAnotacao
              key={anotacao.id}
              anotacao={anotacao}
              onRemove={onRemove}
              onDetails={onDetails}
            />
          ))
        )}
      </ul>
    </Cartao>
  );
};

export default ListaAnotacoes;
