import Image from 'next/image'

export default function HomePage() {
  return (
    <main className='bg-ESD-Black'>
      <section className='static overflow-hidden bg-black text-white'>
        <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-col items-center justify-between py-12 lg:flex-row lg:py-24'>
            <div className='mb-8 w-full text-center lg:mb-0 lg:w-1/2 lg:text-left'>
              <h1 className='mb-4 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
                Empowering Cultural Projects
              </h1>
              <p className='mx-auto mb-8 max-w-lg text-xl sm:text-2xl lg:mx-0'>
                Eritis Sicut Dei: Supporting and nurturing cultural initiatives
                since 2014.
              </p>
              <div className='flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start'>
                <button className='bg-white text-black hover:bg-gray-200'>
                  Our Projects
                </button>
                <button className='border-white text-white hover:bg-white hover:text-black'>
                  Get Involved
                </button>
              </div>
            </div>
            <div className='flex w-full justify-center lg:w-1/2 lg:justify-end'>
              <div className='relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96'>
                <Image
                  priority
                  src='/img/logo_black.png'
                  alt='Eritis Sicut Dei Logo'
                  layout='fill'
                  objectFit='contain'
                  className='animate-float'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent'></div>
      </section>

      <section
        id='queHacemos'
        className='min-h my-10 flex flex-col gap-6 bg-black py-12'
      >
        <article
          className='mx-auto flex gap-3'
          id='misionVision'
        >
          <p className='border-e-2 px-3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
            blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
            magnam suscipit dolorum perspiciatis, tempore sapiente neque
            reprehenderit voluptates quaerat ipsa explicabo corporis.
          </p>
          <p className='my-auto px-4'>MISIÓN - VISIÓN</p>
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
        <article
          className='mx-auto flex gap-3'
          id='transparencia'
        >
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
            Contáctanos!
          </h2>
          <p className='mb-8 text-center font-light text-gray-500 sm:text-xl lg:mb-16 dark:text-gray-400'>
            Si deseas patrocinar o presentar un proyecto ¡no dudes en
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
                placeholder='Asunto'
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
                placeholder='Ingresa una descripción'
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
