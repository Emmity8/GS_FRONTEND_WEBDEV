import { useState, useEffect } from "react";
import CardProfissional from "../components/CardProfissional";
import SearchBar from "../components/SearchBar/";
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
    <main className="p-6">
      <SearchBar busca={busca} setBusca={setBusca} />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filtrados.map((p) => (
          <CardProfissional key={p.id} profissional={p} onSelect={setSelecionado} />
        ))}
      </div>

      {selecionado && (
        <ModalPerfil profissional={selecionado} onClose={() => setSelecionado(null)} />
      )}
    </main>
  );
}