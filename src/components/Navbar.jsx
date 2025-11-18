import ToggleDarkMode from "./ToogleDarkMode";

export default function Navbar({ aba, setAba, darkMode, setDarkMode }) {
  const abas = [
    { id: "home", label: "Início" },
    { id: "feed", label: "Colaborações" },
    { id: "conexoes", label: "Conexões" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-gray-700">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          CarrerHub
        </h1>

        <div className="flex items-center gap-8">
          {abas.map((a) => (
            <button
              key={a.id}
              onClick={() => setAba(a.id)}
              className={`font-medium transition pb-1 ${
                aba === a.id
                  ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-500"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-500"
              }`}
            >
              {a.label}
            </button>
          ))}

          <ToggleDarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      </nav>
    </header>
  );
}
