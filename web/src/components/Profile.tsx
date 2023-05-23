import { getUser } from '@/lib/auth'
import Image from 'next/image'

// Componente do perfil logado na página.

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-4 text-left">
      <Image
        src={avatarUrl}
        width={52}
        height={52}
        alt=""
        className="h-15 w-15 rounded-full border-[2px] border-purple-500 p-1"
      />

      <p className="max-w-[140px] leading-snug text-white">
        {name}
        <a
          href="/api/auth/logout"
          className="block text-red-400 transition-colors hover:text-red-300"
        >
          Quero sair
        </a>
      </p>
    </div>
  )
}
