import { gerarTrilhasAprendizado } from "../utils/Requalifica";

export default function ModalPerfil({ profissional, onClose }) {
  const trilhas = gerarTrilhasAprendizado(profissional);

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 max-w-lg w-full relative overflow-y-auto max-h-[90vh]">
        
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
        >
          ✕
        </button>

        <div className="flex flex-col items-center text-center mb-4">
          <img
            src={profissional.foto}
            alt={profissional.nome}
            className="w-28 h-28 rounded-full object-cover mb-3 border-4 border-blue-100 shadow-sm"
          />
          <h2 className="text-xl font-semibold text-blue-600 dark:text-blue-400">
            {profissional.nome}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {profissional.cargo}
          </p>

          {profissional.localizacao && (
            <p className="text-xs text-gray-400 dark:text-gray-500">
              {profissional.localizacao}
            </p>
          )}
        </div>

        {profissional.resumo && (
          <section className="mb-5">
            <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-400">
              Sobre
            </h3>
            <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
              {profissional.resumo}
            </p>
          </section>
        )}

        {profissional.habilidadesTecnicas?.length > 0 && (
          <section className="mb-5">
            <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-400">
              Habilidades Técnicas
            </h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {profissional.habilidadesTecnicas.map((h, i) => (
                <li
                  key={i}
                  className="bg-blue-100 dark:bg-blue-900/40 px-3 py-1 rounded-full text-xs text-blue-800 dark:text-blue-300"
                >
                  {h}
                </li>
              ))}
            </ul>
          </section>
        )}

        {profissional.softSkills?.length > 0 && (
          <section className="mb-5">
            <h3 className="font-semibold text-lg text-green-700 dark:text-green-400">
              Soft Skills
            </h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {profissional.softSkills.map((s, i) => (
                <li
                  key={i}
                  className="bg-green-100 dark:bg-green-900/40 px-3 py-1 rounded-full text-xs text-green-800 dark:text-green-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>
        )}

        {profissional.idiomas?.length > 0 && (
          <section className="mb-5">
            <h3 className="font-semibold text-lg text-purple-700 dark:text-purple-400">
              Idiomas
            </h3>
            <ul className="flex flex-col gap-1 mt-2">
              {profissional.idiomas.map((i, idx) => (
                <li
                  key={idx}
                  className="bg-purple-100 dark:bg-purple-900/40 px-3 py-1 rounded-lg text-xs text-purple-800 dark:text-purple-300"
                >
                  {i.idioma} — {i.nivel}
                </li>
              ))}
            </ul>
          </section>
        )}

        {profissional.areainteresses?.length > 0 && (
          <section className="mb-5">
            <h3 className="font-semibold text-lg text-pink-700 dark:text-pink-400">
              Áreas de Interesse
            </h3>
            <ul className="flex flex-wrap gap-2 mt-2">
              {profissional.areainteresses.map((i, idx) => (
                <li
                  key={idx}
                  className="bg-pink-100 dark:bg-pink-900/40 px-3 py-1 rounded-full text-xs text-pink-800 dark:text-pink-300"
                >
                  {i}
                </li>
              ))}
            </ul>
          </section>
        )}


        <section className="space-y-3">
          <h3 className="font-semibold text-lg text-blue-700 dark:text-blue-400">
            🎓 Trilhas de Aprendizado Recomendadas
          </h3>

          {trilhas.map((t, index) => (
            <div
              key={index}
              className="bg-blue-50 dark:bg-gray-700/40 p-3 rounded-lg"
            >
              <p className="text-sm text-gray-700 dark:text-gray-200 mb-1">
                <strong>{t.tipo}:</strong> {t.descricao}
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300">
                {t.recomendacoes.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <div className="flex flex-col gap-3 mt-6">
          <div className="mb-4">
            <h4 className="font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Deixe uma recomendação
            </h4>
            <textarea 
              placeholder="Escreva sua recomendação para este profissional..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              rows="3"
              id="recomendacao-text"
            />
            <div id="recomendacao-error" className="text-red-500 text-sm mt-1 hidden">
              Por favor, escreva uma recomendação antes de enviar.
            </div>
            <button 
              onClick={() => {
                const texto = document.getElementById('recomendacao-text').value;
                const errorElement = document.getElementById('recomendacao-error');
                
                if (!texto.trim()) {
                  errorElement.classList.remove('hidden');
                  return;
                }
                
                errorElement.classList.add('hidden');
                alert(`Recomendação enviada para ${profissional.nome}!`);
                document.getElementById('recomendacao-text').value = '';
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium mt-2"
            >
              Enviar recomendação
            </button>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-green-700 dark:text-green-400 mb-2">
              Enviar mensagem
            </h4>
            <textarea 
              placeholder="Digite sua mensagem..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 dark:bg-gray-700 dark:text-white"
              rows="3"
              id="mensagem-text"
            />

            <div id="mensagem-error" className="text-red-500 text-sm mt-1 hidden">
              Por favor, escreva uma mensagem antes de enviar.
            </div>
            <button 
              onClick={() => {
                const texto = document.getElementById('mensagem-text').value;
                const errorElement = document.getElementById('mensagem-error');
                
                if (!texto.trim()) {
                  errorElement.classList.remove('hidden');
                  return;
                }
                
                errorElement.classList.add('hidden');
                alert(`Mensagem enviada para ${profissional.nome}!`);
                document.getElementById('mensagem-text').value = '';
              }}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium mt-2"
            >
              Enviar mensagem
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}