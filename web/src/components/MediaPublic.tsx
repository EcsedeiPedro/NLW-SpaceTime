import { Camera } from 'lucide-react'

export function MediaPublic() {
  return (
    <div className="flex items-center gap-4">
      <label
        htmlFor="media"
        className="flex cursor-pointer items-center gap-1.5 text-sm text-gray-200 transition-colors hover:text-purple-300"
      >
        <Camera className="h-4 w-4" />
        Anexar mídia
      </label>

      <label
        htmlFor="isPublic"
        className="flex items-center gap-1.5 text-sm text-gray-200 transition-colors hover:text-purple-300"
      >
        <input
          type="checkbox"
          name="isPublic"
          id="isPublic"
          value="true"
          className="h-4 w-4 rounded border-purple-300 bg-gray-50 text-purple-300"
        />
        Tornar memória pública
      </label>
    </div>
  )
}
