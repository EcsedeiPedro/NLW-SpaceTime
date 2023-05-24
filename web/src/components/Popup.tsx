import { IMemory } from '@/interfaces/IMemory'
import { X } from 'lucide-react'
import dayjs from 'dayjs'
import ptBr from 'dayjs/locale/pt-br'
dayjs.locale(ptBr)

interface IPopupProps {
  memory: IMemory
  closePopup: () => void
}

export default function Popup({ popupProps }: { popupProps: IPopupProps }) {
  return (
    <div className="fixed left-0 top-0 flex min-h-screen w-full items-center justify-center bg-black/70 p-8">
      <div className="relative flex w-[900px] flex-col  rounded-lg">
        <div
          className={`h-[300px] rounded-t-lg  bg-cover bg-center shadow-xl`}
          style={{ backgroundImage: `url(${popupProps.memory.coverUrl})` }}
        >
          <button
            onClick={() => popupProps.closePopup()}
            className="absolute right-5 top-5"
          >
            <X className="text-gray-50" />
          </button>
        </div>

        <div className="flex h-[300px] flex-col justify-center overflow-y-auto rounded-b-lg bg-white p-6 scrollbar-thin scrollbar-thumb-purple-600">
          <span className="text-gray-200">
            {dayjs(popupProps.memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
          </span>
          <p className="mt-8 max-h-[200px] break-all text-justify text-base text-gray-400">
            {popupProps.memory.content}
          </p>
        </div>
      </div>
    </div>
  )
}
