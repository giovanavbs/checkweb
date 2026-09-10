const Botao = ({
  variante = "primary",
  tamanho = "md",
  children,
  ...props
}) => {
  const variantes = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    danger: "bg-red-600 text-white hover:bg-red-700",
    ghost: "bg-gray-100 text-gray-700 hover:bg-gray-200",
  };

  const tamanhos = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 ${variantes[variante]} ${tamanhos[tamanho]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Botao;
