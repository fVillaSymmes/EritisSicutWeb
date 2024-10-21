'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navItems = [
  { name: 'Contacto', href: '/#contacto' },
  { name: 'Manifiesto', href: '/#manifiesto' },
  { name: 'Misión-Visión', href: '/#mision-Vision' },
  { name: 'Transparencia', href: '/transparencia' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-black text-white'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='flex h-16 items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <Link href='/'>
                <Image
                  src='/img/logo_black_con_text_2.png'
                  alt='Eritis Sicut Dei Logo'
                  width={80}
                  height={40}
                />
              </Link>
            </div>
          </div>
          <div className='hidden md:block'>
            <div className='ml-10 flex items-baseline space-x-4'>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className='rounded-md px-3 py-2 font-body text-sm font-medium transition duration-150 ease-in-out hover:bg-gray-800'
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className='md:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
            >
              <span className='sr-only'>Open main menu</span>
              {isOpen ? (
                <X className='block h-6 w-6' />
              ) : (
                <Menu className='block h-6 w-6' />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className='md:hidden'>
          {/* Agrego absolute y w-full para que no mueva el contenido sino que se sobreponga a él */}
          <div className='absolute w-full space-y-1 px-2 pb-3 pt-2 backdrop-blur-sm sm:px-3'>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='block rounded-md px-3 py-2 font-body text-base font-medium transition duration-150 ease-in-out hover:bg-gray-800'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
