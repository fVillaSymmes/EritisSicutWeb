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
            className='border p-2'
          >
            Saber más
          </Link>
        </div>
      </section>

      <section
        id='queHacemos'
        className='my-10 flex flex-col gap-6 bg-black py-12'
      >
        <article className='mx-auto flex gap-3'>
          <p className='border-e-2 px-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
          <p className='my-auto px-4'>¿QUÉ HACEMOS?</p>
        </article>
        <article
          id='manifiesto'
          className='mx-auto flex gap-3'
        >
          <p className='my-auto px-4'>EL MANIFIESTO</p>
          <p className='border-s-2 px-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
        </article>
        <article className='mx-auto flex gap-3'>
          <p className='border-e-2 px-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
          <p className='my-auto px-4'>TRANSPARENCIA</p>
        </article>
      </section>

      <section
        className='bg-ESD-Black'
        id='contacto'
      >
        <article className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
          <h2 className='mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white'>
            Contactanos!
          </h2>
          <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400'>
            {' '}
            Si eres donante, o quieres presentar un proyecto, no dudes en
            contactarnos!
          </p>
          <form
            action='#'
            className='space-y-8'
          >
            <div>
              <label
                htmlFor='email'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='johndoe@gmail.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Motivo
              </label>
              <input
                type='text'
                id='subject'
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='Hazla corta'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300'
              >
                Mensaje
              </label>
              <textarea
                id='message'
                rows={6}
                className='focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400'
                placeholder='Deja una descripción'
              ></textarea>
            </div>
            <button
              type='submit'
              className='rounded-lg px-5 py-3 text-center text-sm font-medium text-white hover:bg-slate-800 focus:outline-none sm:w-fit dark:bg-gray-700'
            >
              Enviar
            </button>
          </form>
        </article>
      </section>
    </main>
  )
}
