'use client'

import { ArrowRight } from 'lucide-react'
import Popup from './Popup'
import Image from 'next/image'
import { useState } from 'react'
import { IMemory } from '@/interfaces/IMemory'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
dayjs.locale(ptBr)

export default function ListMemories({ memories }: { memories: IMemory[] }) {
  const [isActive, setIsActive] = useState(false)
  const [selectedId, setSelectedId] = useState<number>(0)

  function closePopup() {
    setIsActive(false)
  }

  function openPopup(id: number) {
    setSelectedId(id)

    setIsActive(true)
  }

  return (
    <div className="relative flex flex-col gap-10 p-8">
      {memories.map((memory, index) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 self-start text-sm text-red-50 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image
              src={memory.coverUrl}
              width={592}
              height={280}
              alt=""
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="break-all text-lg leading-relaxed text-gray-200">
              {memory.excerpt}
            </p>

            <button
              onClick={() => openPopup(index)}
              id="more"
              className="text-smtext-purple-600 flex items-center gap-2 text-purple-600 hover:text-purple-300"
            >
              Ler mais
              <ArrowRight className="h-4 w-4 text-purple-600" />
            </button>
          </div>
        )
      })}
      {isActive && (
        <Popup popupProps={{ memory: memories[selectedId], closePopup }} />
      )}
    </div>
  )
}
