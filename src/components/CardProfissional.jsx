export default function CardProfissional({
  profissional,
  onOpen,
  onConectar,
  isConectado = false,
  mostrarBotaoConectar = true,
}) {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col items-center border border-gray-100 dark:border-gray-700 hover:-translate-y-1">
      <div className="relative">
        <img
          src={profissional.foto}
          alt={profissional.nome}
          className="w-28 h-28 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-md group-hover:scale-105 transition-transform"
        />
        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>

      <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100 group-hover:text-blue-600">
        {profissional.nome}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
        {profissional.cargo}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {profissional.habilidadesTecnicas.slice(0, 3).map((tag, i) => (
          <span
            key={i}
            className="text-xs bg-blue-50 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 text-center line-clamp-3 mb-4">
        {profissional.resumo}
      </p>

      <div className="flex w-full justify-between gap-3 mt-auto">
        <button
          onClick={onOpen}
          className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-2 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          Ver perfil
        </button>

        {mostrarBotaoConectar && (
          <button
            onClick={!isConectado ? onConectar : undefined}
            disabled={isConectado}
            className={`flex-1 py-2 rounded-lg font-medium transition ${
              isConectado
                ? "bg-green-600 text-white cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
          >
            {isConectado ? "Já conectado" : "Conectar"}
          </button>
        )}
      </div>

      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 via-transparent to-indigo-400/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity pointer-events-none"></div>
    </div>
  );
}
