import Link from 'next/link'
import { NavbarBurgerMenu } from '../navbarBurguerMenu/NavbarBurguerMenu'
import { NavbarMenuItems } from '../navbarMenuItems/NavbarMenuItems'

const navItems = [
  {
    text: 'Contacto',
    url: '#contacto',
  },
  {
    text: 'Manifiesto',
    url: '#manifiesto',
  },
  {
    text: 'Mision-Vision',
    url: '#misionVision',
  },
  {
    text: 'Transparencia',
    url: '#transparencia',
  },
]

export const Navbar = () => {
  return (
    <nav className='bg-ESD-Black px-2 py-2.5 sm:px-4'>
      <div className='container mx-auto flex flex-wrap items-center justify-between'>
        <Link
          href='/'
          className='flex items-center'
        >
          <span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
            Eritis Sicut Dei
          </span>
        </Link>

        <NavbarBurgerMenu>
          {navItems.map((navItem) => (
            <NavbarMenuItems
              key={navItem.text}
              {...navItem}
            />
          ))}
        </NavbarBurgerMenu>
      </div>
    </nav>
  )
}
