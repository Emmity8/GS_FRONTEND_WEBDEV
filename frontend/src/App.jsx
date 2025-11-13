import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FeedColaborativo from "./components/FeedColaborativo";
import Conexoes from "./components/Conexoes";
import CardProfissional from "./components/CardProfissional";
import ModalPerfil from "./components/ModalPerfil";
import Footer from "./components/Footer";
import data from "./data/profissionais.json";

export default function App() {
  const [aba, setAba] = useState("home");
  const [selecionado, setSelecionado] = useState(null);
  const [conexoes, setConexoes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filtroRegiao, setFiltroRegiao] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const handleConectar = (profissional) => {
    if (!conexoes.some((p) => p.id === profissional.id)) {
      setConexoes([...conexoes, profissional]);
      setAba("conexoes");
    }
  };

  const profissionaisFiltrados = data.filter((prof) =>
    prof.localizacao?.toLowerCase().includes(filtroRegiao.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-all">

      <Navbar
        aba={aba}
        setAba={setAba}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="flex-grow p-6">
        {aba === "home" && (
          <section>
            <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-6">
              👥 Profissionais Conectados ao Futuro do Trabalho
            </h2>

            <div className="flex justify-center mb-8">
              <input
                type="text"
                placeholder="Buscar por região (ex: São Paulo, RJ)"
                value={filtroRegiao}
                onChange={(e) => setFiltroRegiao(e.target.value)}
                className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-100"
              />
            </div>

            {profissionaisFiltrados.length > 0 ? (
              <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 mt-4 px-4">
                {profissionaisFiltrados.map((prof) => (
                  <CardProfissional
                    key={prof.id}
                    profissional={prof}
                    onOpen={() => setSelecionado(prof)}
                    onConectar={() => handleConectar(prof)}
                    isConectado={conexoes.some((p) => p.id === prof.id)}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-400 mt-6">
                Nenhum profissional encontrado para "{filtroRegiao}".
              </p>
            )}
          </section>
        )}

        {aba === "feed" && <FeedColaborativo />}

        {aba === "conexoes" && <Conexoes conexoes={conexoes} />}
      </main>

      {selecionado && (
        <ModalPerfil
          profissional={selecionado}
          onClose={() => setSelecionado(null)}
        />
      )}

      <Footer />
    </div>
  );
}
