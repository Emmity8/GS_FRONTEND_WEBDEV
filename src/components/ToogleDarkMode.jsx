export default function ToggleDarkMode({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:scale-105 transition"
      title="Alternar modo"
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}
