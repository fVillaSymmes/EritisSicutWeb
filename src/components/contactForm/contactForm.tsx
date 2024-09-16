'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'

export default function ContactForm() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envío de formulario
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reiniciar formulario y mostrar mensaje de éxito
    setEmail('')
    setSubject('')
    setMessage('')
    setIsSubmitting(false)
    toast({
      title: 'Mensaje enviado',
      description: 'Gracias por contactarnos. Te responderemos pronto.',
    })
  }

  return (
    <div className='flex items-center justify-center bg-black px-4 py-16 text-white sm:px-6 lg:px-8'>
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='font-headings mt-6 text-center text-3xl font-extrabold'>
            Contáctanos
          </h2>
          <p className='font-body mt-2 text-center text-sm text-gray-400'>
            Estamos aquí para escucharte y apoyar tus proyectos culturales
          </p>
        </div>
        <form
          className='mt-8 space-y-6'
          onSubmit={handleSubmit}
        >
          <div className='font-body -space-y-px rounded-md shadow-sm'>
            <div>
              <label
                htmlFor='email-address'
                className='sr-only'
              >
                Correo electrónico
              </label>
              <Input
                id='email-address'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='bg-gray-900 text-white placeholder-gray-500'
                placeholder='Correo electrónico'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mt-4'>
              <label
                htmlFor='subject'
                className='sr-only'
              >
                Asunto
              </label>
              <Input
                id='subject'
                name='subject'
                type='text'
                required
                className='bg-gray-900 text-white placeholder-gray-500'
                placeholder='Asunto'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className='mt-4'>
              <label
                htmlFor='message'
                className='sr-only'
              >
                Mensaje
              </label>
              <Textarea
                id='message'
                name='message'
                rows={4}
                required
                className='bg-gray-900 text-white placeholder-gray-500'
                placeholder='Tu mensaje'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <div>
            <Button
              type='submit'
              className='font-body w-full bg-white text-black hover:bg-gray-200'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
