export default function SearchBar({ busca, setBusca }) {
  return (
    <div className="max-w-md mx-auto">
      <input
        type="text"
        placeholder="Buscar por nome, área ou cidade..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
      />
    </div>
  );
}
