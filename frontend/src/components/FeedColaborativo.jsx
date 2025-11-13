import { useState } from "react";
import PostCard from "./PostCard";

export default function FeedColaborativo() {
  const [posts, setPosts] = useState([
    { id: 1, autor: "Ana Souza", area: "Tecnologia", conteudo: "Aprendi muito sobre IA aplicada a dados! 🚀", curtidas: 4, comentarios: ["Parabéns!", "Que demais!"] },
    { id: 2, autor: "Bruno Lima", area: "Design", conteudo: "Nova tendência em UX: interfaces mais éticas e inclusivas 💡", curtidas: 2, comentarios: [] }
  ]);
  const [novoPost, setNovoPost] = useState("");

  const handlePublicar = () => {
    if (!novoPost.trim()) return;
    const post = {
      id: posts.length + 1,
      autor: "Você",
      area: "Geral",
      conteudo: novoPost,
      curtidas: 0,
      comentarios: []
    };
    setPosts([post, ...posts]);
    setNovoPost("");
  };

  return (
    <section className="max-w-2xl mx-auto mt-8">
      <div className="card-glass p-6">
        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4 text-center">
          💬 Compartilhe sua experiência
        </h2>
        <textarea
          value={novoPost}
          onChange={(e) => setNovoPost(e.target.value)}
          placeholder="Conte algo sobre sua trajetória, um aprendizado ou desafio..."
          className="w-full border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 rounded-lg p-3"
        />
        <button
          onClick={handlePublicar}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition w-full"
        >
          Publicar
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </section>
  );
}
