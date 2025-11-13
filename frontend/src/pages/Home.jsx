import { useState, useEffect } from "react";
import CardProfissional from "../components/CardProfissional";
import SearchBar from "../components/CardProfissional";
import ModalPerfil from "../components/ModalPerfil";
import data from "../data/profissionais.json";

export default function Home() {
  const [busca, setBusca] = useState("");
  const [selecionado, setSelecionado] = useState(null);

  const filtrados = data.filter(
    (p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.area.toLowerCase().includes(busca.toLowerCase()) ||
      p.localizacao.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
    
    </>
  );
}