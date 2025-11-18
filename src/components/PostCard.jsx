export default function PostCard({ post }) {
  return (
    <div className="card-glass p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-lg">{post.autor}</h3>
        <span className="text-xs bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded text-blue-700 dark:text-blue-300">
          {post.area}
        </span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{post.conteudo}</p>
      <div className="flex gap-4 mt-3 text-sm">
        <button className="hover:text-blue-600">👍 {post.curtidas}</button>
        <button className="hover:text-green-600">💬 {post.comentarios.length}</button>
      </div>
    </div>
  );
}
