import NoteItem from "./NoteItem";
import Card from "./ui/Card";

const NoteList = ({ items, onRemove, onDetails }) => {
  return (
    <Card title={`Anotações (${items.length})`}>
      <ul className="divide-y -mx-4">
        {items.length === 0 ? (
          <li className="p-4 text-gray-500">Nenhuma anotação encontrada</li>
        ) : (
          items.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              onRemove={onRemove}
              onDetails={onDetails}
            />
          ))
        )}
      </ul>
    </Card>
  );
};

export default NoteList;
