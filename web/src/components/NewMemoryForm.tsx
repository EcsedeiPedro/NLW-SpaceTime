'use client'

// Seção de criação de memória.

import { MediaPicker } from './MediaPicker'
import { FormEvent } from 'react'
import Cookie from 'js-cookie'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { TextArea } from './TextArea'
import { SubmitButton } from './SubmitButton'
import { MediaPublic } from './MediaPublic'

export function NewMemoryForm() {
  const router = useRouter()

  async function handleCreateMemory(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('coverUrl')

    let coverUrl = ''

    if (fileToUpload) {
      const uploadFormData = new FormData()
      uploadFormData.set('file', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      coverUrl = uploadResponse.data.fileUrl
    }

    const token = Cookie.get('token')

    await api.post(
      '/memories',
      {
        coverUrl,
        content: formData.get('content'),
        isPublic: formData.get('isPublic'),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    router.push('/')
  }

  return (
    <form
      onSubmit={handleCreateMemory}
      className="flex flex-1 flex-col gap-2 p-1"
    >
      <MediaPublic />

      <MediaPicker />

      <TextArea />

      <SubmitButton />
    </form>
  )
}
