export function TextArea() {
  return (
    <textarea
      name="content"
      id="content"
      spellCheck={false}
      className="scrollbar-rounded-lg flex-1 resize-none rounded border-0 bg-transparent p-0 text-lg leading-relaxed text-gray-100 scrollbar-thin scrollbar-thumb-purple-600 placeholder:text-gray-400 focus:ring-0"
      placeholder="Fique livre para adicionar fotos, vídeos e relatos sobre essa experiência que você quer lembrar para sempre."
    ></textarea>
  )
}
