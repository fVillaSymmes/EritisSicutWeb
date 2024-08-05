import Image from 'next/image'
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'


export default function HomePage() {
  return (
  <main className='flex flex-col items-center justify-center bg-custom min-h-screen'>
  <div className='relative w-full flex justify-center items-center'>
    <div className='flex flex-col items-center'>
      <span className='text-8xl mb-4 font-bodoni-72'>Fundación</span>
      <Image
        alt={'Logo de la fundación Eritis Sicut Dei'}
        src={LogoEritisSicutDei}
        className='rounded-full'
        priority
        width={500}
        height={500}
      />
      <span className='text-8xl mt-4 font-bodoni-72'>Eritis Sicut Dei</span>
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
