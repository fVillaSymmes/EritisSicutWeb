import Image from 'next/image'
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'


export default function HomePage() {
  return (
    <main className='flex flex-col items-center justify-center'>
    <div className='relative w-full flex justify-center items-start'>
      <div className='flex flex-col items-center'>
        <Image
          alt={'Logo de la fundación Eritis Sicut Dei'}
          src={LogoEritisSicutDei}
          className='rounded-full'
          priority
          
        />
        <span className='text-2xl mt-2'> Fundación Eritis Sicut Dei</span>
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
