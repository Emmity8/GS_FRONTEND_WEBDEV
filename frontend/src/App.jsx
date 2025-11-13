import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import FeedColaborativo from "./components/FeedColaborativo";
import Conexoes from "./components/Conexoes";
import CardProfissional from "./components/CardProfissional";
import ModalPerfil from "./components/ModalPerfil";
import data from "./data/profissionais.json";

export default function App() {
  const [aba, setAba] = useState("home");
  const [selecionado, setSelecionado] = useState(null);
  const [conexoes, setConexoes] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filtroRegiao, setFiltroRegiao] = useState("");

  // Aplica o tema escuro no <html>
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Ao clicar em conectar, adiciona e vai pra aba conexões
  const handleConectar = (profissional) => {
    if (!conexoes.some((p) => p.id === profissional.id)) {
      setConexoes([...conexoes, profissional]);
      setAba("conexoes"); // muda para a aba de conexões automaticamente
    }
  };

  // Filtra profissionais por região
  const profissionaisFiltrados = data.filter((prof) =>
    prof.localizacao?.toLowerCase().includes(filtroRegiao.toLowerCase())
  );