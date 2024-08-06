import Image from 'next/image'
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'

export default function HomePage() {
  return (
    <main className='bg-ESD-Black'>
      <Image
        alt={'Logo de la fundación Eritis Sicut Dei'}
        src={LogoEritisSicutDei}
        className='w-full'
        priority
      />
      <div className='flex flex-col gap-2'>
        <h1 className='text-center text-3xl'>Fundación Eritis Sicut Dei</h1>
        <p className='m-4'>
          Ayudamos a gestar grandes ideas de la mano de aquellos que pueden
          hacerlas posibles.
        </p>
      </div>
      <div className='text-center'>
        <button className='my-5 p-2 outline-dashed'>Saber más</button>
      </div>

      <section></section>
    </main>
  )
}
