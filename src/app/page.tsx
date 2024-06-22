import Image from 'next/image'
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'

export default function HomePage() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='relative w-full'>
        <div className='absolute -z-10 w-full'>
          <Image
            alt={'Logo de la fundación Eritis Sicut Dei'}
            src={LogoEritisSicutDei}
            className='w-full'
            priority
          />
        </div>
      </div>
    </main>
  )
}
