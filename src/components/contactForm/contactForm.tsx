

'use client';

import React, { FormEvent, useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitResult(null);

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      message: { value: string };
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "925c43cd-dc82-4e15-b1cd-b248ab9beaf7",
          name: target.name.value,
          email: target.email.value,
          message: target.message.value,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitResult('Form submitted successfully!');
        // Opcional: resetear el formulario
        // e.target.reset();
      } else {
        setSubmitResult('Form submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitResult('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  }

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
          onSubmit={handleSubmit}
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
            </Button>
            {submitResult &&
              `Mensaje enviado exitosamente`}
            
          </div>
        </form>
      </div>
    </div>
  )



 
}