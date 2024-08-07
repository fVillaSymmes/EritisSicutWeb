import Image from 'next/image'
import LogoEritisSicutDei from '/public/img/logoEritisSicutDei.jpeg'
import Link from 'next/link'


export default function HomePage() {
  return (
    <main className='bg-ESD-Black'>
    <section>
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
      <div className='my-5 text-center'>
        <Link
          href='#queHacemos'
          className='p-2 outline-dashed'
        >
          Saber más
        </Link>
      </div>
    </section>

    <section id='queHacemos' className='bg-negro py-8 md:py-20'>
  <div className='container mx-auto px-4'>
    <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 md:mb-16 text-white'>Qué Hacemos</h2>
    
    <div className='space-y-16 md:space-y-24'>
      <article className='flex flex-col md:flex-row items-center'>
        <div className='w-full md:w-1/2 mb-6 md:mb-0 md:pr-8'>
          <p className='text-gray-300 leading-relaxed text-base md:text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
        </div>
        <div className='w-full md:w-1/2 md:pl-8 md:border-l md:border-gray-700'>
          <h3 className='text-2xl md:text-3xl font-semibold text-white mb-4'>Cómo lo Hacemos</h3>
          <div className='w-16 md:w-20 h-1 bg-blue-500 mb-6'></div>
        </div>
      </article>

      <article className='flex flex-col md:flex-row-reverse items-center'>
        <div className='w-full md:w-1/2 mb-2   md:mb-0 md:pl-8'>
          <p className='text-gray-300 leading-relaxed text-base md:text-lg'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
        </div>
        <div className='w-full md:w-1/2 md:pr-8 md:border-r md:border-gray-700 md:text-right'>
          <h3 className='text-2xl md:text-3xl font-semibold text-white mb-4'>Quiénes Somos</h3>
          <div className='w-16 md:w-20 h-1 bg-blue-500 mb-6 md:ml-auto'></div>
        </div>
      </article>
    </div>
  </div>
</section>
    <section>CONTACTO</section>
  </main>
  )
}
