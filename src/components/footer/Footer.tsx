import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='bg-black text-white'>
      <div className='mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col items-center md:items-start'>
            <Image
              src='/img/logo_black.png'
              alt='Eritis Sicut Dei Logo'
              width={80}
              height={80}
              className='sm:mx-auto'
            />
            <p className='mx-12 mt-2 text-center font-headings text-sm'>
              Fundación para el rescate y promoción del patrimonio cultural
              Eritis Sicut Dei
            </p>
          </div>
          <div className='flex flex-col items-center font-body'>
            <h3 className='mb-2 text-lg font-semibold'>Enlaces rápidos</h3>
            <Link
              href='#contacto'
              className='hover:underline'
            >
              Contacto
            </Link>
            <Link
              href='#manifiesto'
              className='hover:underline'
            >
              Manifiesto
            </Link>
            <Link
              href='#mision-Vision'
              className='hover:underline'
            >
              Misión-Visión
            </Link>
            <Link
              href='/transparencia'
              className='hover:underline'
            >
              Transparencia
            </Link>
          </div>
          <div className='my-auto flex flex-col items-center'>
            <h3 className='mb-2 font-body text-lg font-semibold'>Síguenos</h3>
            <div className='flex space-x-4'>
              <a
                href='#'
                className='hover:text-gray-400'
              >
                <Facebook />
              </a>
              <a
                href='#'
                className='hover:text-gray-400'
              >
                <Twitter />
              </a>
              <a
                href='#'
                className='hover:text-gray-400'
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-800 pt-8 text-center'>
          <p className='font-body text-sm'>
            &copy; {new Date().getFullYear()} Eritis Sicut Dei
          </p>
        </div>
      </div>
    </footer>
  )
}
