'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { useServerAction } from 'zsa-react'
import { produceNewMessage } from './action'

export default function ContactForm() {
  const { isPending, executeFormAction, isSuccess, data, isError, error } =
    useServerAction(produceNewMessage)

  return (
    <div
      className='flex items-center justify-center bg-black px-4 py-16 text-white sm:px-6 lg:px-8'
      id='contacto'
    >
      <div className='w-full max-w-md space-y-8'>
        <div>
          <h2 className='mt-6 text-center font-headings text-3xl font-extrabold'>
            Contáctanos
          </h2>
          <p className='mt-2 text-center font-body text-sm text-gray-400'>
            Estamos aquí para escucharte y apoyar tus proyectos culturales
          </p>
        </div>
        <form
          className='mt-8 space-y-6'
          action={executeFormAction}
        >
          <div className='-space-y-px rounded-md font-body shadow-sm'>
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
              />
            </div>
          </div>

          <div>
            <Button
              type='submit'
              className='w-full bg-white font-body text-black hover:bg-gray-200'
              disabled={isPending}
            >
              {isPending ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
            {isSuccess &&
              `Mensaje enviado exitosamente: ${JSON.stringify(data)}`}
            {isError && `Error: ${JSON.stringify(error)}`}
          </div>
        </form>
      </div>
    </div>
  )
}
