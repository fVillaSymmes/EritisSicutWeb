import Link from 'next/link'

interface Props {
  text: string
  url: string
}

export const NavbarMenuItems = ({ text, url }: Props) => {
  return (
    <>
      <li>
        <Link
          href={url}
          className='block border-b border-gray-100 py-2 pl-3 pr-4 text-gray-700 hover:bg-gray-50 md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent md:dark:hover:text-white'
        >
          {text}
        </Link>
      </li>
    </>
  )
}
