const Cartao = ({ titulo, children, className = "" }) => {
  return (
    <div className={`bg-white shadow rounded ${className}`}>
      {titulo && (
        <div className="px-4 py-3 border-b">
          <h2 className="font-medium text-gray-900">{titulo}</h2>
        </div>
      )}

      <div className="p-4">{children}</div>
    </div>
  );
};

export default Cartao;
