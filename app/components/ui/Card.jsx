const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white shadow rounded ${className}`}>
      {title && (
        <div className="px-4 py-3 border-b">
          <h2 className="font-medium text-gray-900">{title}</h2>
        </div>
      )}
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
