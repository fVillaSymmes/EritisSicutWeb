'use client'

import { useState } from 'react'

export const NavbarBurgerMenu = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  function toggleBurgerMenu() {
    setIsOpen((open) => !open)
  }

  return (
    <>
      <div className='flex items-center'>
        <button
          id='menu-toggle'
          type='button'
          className='text-gray-500 2 ml-3 inline-flex items-center p-2 text-sm md:hidden'
          onClick={toggleBurgerMenu}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h16m-7 6h7'
            />
          </svg>
        </button>
      </div>

      <div
        className={`absolute inset-x-0 top-10 w-full backdrop-blur-sm md:block md:w-auto ${isOpen ? '' : 'hidden'}`}
        id='mobile-menu'
      >
        <ul className='mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium'>
          {children}
        </ul>
      </div>
    </>
  )
}
