import { useState } from "react";
import CardProfissional from "./CardProfissional";
import ModalPerfil from "./ModalPerfil";

export default function Conexoes({ conexoes }) {
  const [selecionado, setSelecionado] = useState(null);

  return (
    <section>
      <h2 className="text-3xl font-bold text-center text-blue-700 dark:text-blue-400 mb-8">
        🤝 Minhas Conexões
      </h2>

      {conexoes.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-400">
          Você ainda não adicionou nenhuma conexão. Explore os perfis e comece a se conectar!
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {conexoes.map((prof) => (
            <CardProfissional
              key={prof.id}
              profissional={prof}
              onOpen={() => setSelecionado(prof)}
              mostrarBotaoConectar={false}
            />
          ))}
        </div>
      )}

      {selecionado && (
        <ModalPerfil profissional={selecionado} onClose={() => setSelecionado(null)} />
      )}
    </section>
  );
}
