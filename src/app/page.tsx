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

      <section
        id='queHacemos'
        className='my-10 flex flex-col gap-6 bg-black py-12'
      >
        <article className='mx-auto flex gap-3 outline-dashed'>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
          <p className='my-auto'>COMO LO HACEMOS</p>
        </article>
        <article className='mx-auto flex gap-3 outline-dashed'>
          <p className='my-auto'>QUIENES SOMOS - MISIÓN VISIÓN</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
        </article>
      </section>

      <section>CONTACTO</section>
    </main>
  )
}
