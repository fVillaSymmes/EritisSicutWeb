import Image from 'next/image'
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'

export default function HomePage() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <div className='relative w-full'>
        <div className='absolute -z-10 w-full'>
          {/* Corregir imagen a responsive  */}
          <Image
            alt={'Logo de la fundación Eritis Sicut Dei'}
            src={LogoEritisSicutDei}
            className='w-full'
            priority
          />
        </div>
      </div>
    </main>
    // Feliz★* 。 • ˚ ˚ ˛ ˚ ˛ •
    // •。★Navidad★ 。* 。
    // ° 。 ° ˛˚˛ * _Π_____*。*˚
    // ˚ ˛ •˛•˚ */______/~＼。˚ ˚ ˛
    // ˚ ˛ •˛• ˚ ｜ 田田 ｜門｜ ˚
    // Un feliz año nuevo
  )
}
