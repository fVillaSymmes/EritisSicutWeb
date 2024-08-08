import { NavbarBurgerMenu } from '../navbarBurguerMenu/NavbarBurguerMenu'
import { NavbarMenuItems } from '../navbarMenuItems/NavbarMenuItems'
import Image from 'next/image';
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'

const navItems = [
  {
    text: 'Contacto',
    url: '#contacto'
    
  },
  {
    text: 'Manifiesto',
    url: '/manifiesto',
  },
  {
    text: 'Mision-Vision',
    url: '/mision-vision',
  },
]

export const Navbar = () => {
  return (
    <nav className='rounded  px-2 py-2.5 shadow sm:px-4 dark:border-gray-700 bg-custom'>
      <div className='container relative mx-4 flex flex-wrap items-center justify-between'>
        {/* <Image
        alt='Logo Eritis Sicut Dei'
        src={LogoEritisSicutDei}
        width={50}
        height={50} 
        className='rounded-full mr-0'
        /> */}
        <div className='flex absolute ml-10 items-auto'>
      <a href="/" className='flex items-auto'>
        <span className='self-center whitespace-nowrap text-ms font-bodoni-72 text-opacity-2 text-white ml-5'>
          Eritis
          Sicut
          Dei
        </span>
      </a>
    </div>

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
