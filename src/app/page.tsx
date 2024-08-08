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
    <section id="queHacemos" className="bg-negro py-12 md:py-20 mb-20 md:mb-32">
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">Qué Hacemos</h2>
      <p className="text-gray-400 leading-relaxed text-base md:text-lg mb-12 md:mb-16">
        Nuestra organización se dedica a hacer un impacto positivo en la comunidad. Conócenos mejor a través de nuestras principales áreas de trabajo.
      </p>
    </div>

    <div className="border-b border-gray-700 mb-12 md:mb-20"></div>
  </div>

  <div className="container mx-auto px-4 space-y-16 md:space-y-24">
    <article className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pr-8">
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
          magnam suscipit dolorum perspiciatis, tempore sapiente neque
          reprehenderit voluptates quaerat ipsa explicabo corporis.
        </p>
      </div>
      <div className="w-full md:w-1/2 md:pl-8 md:border-l md:border-gray-700">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Cómo lo Hacemos</h3>
        <div className="w-16 md:w-20 h-1 bg-blue-500 mb-6"></div>
      </div>
    </article>

    <article className="flex flex-col md:flex-row-reverse items-center">
      <div className="w-full md:w-1/2 mb-6 md:mb-0 md:pl-8">
        <p className="text-gray-400 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia
          blanditiis voluptatum eius ipsum laborum deleniti quo voluptas
          magnam suscipit dolorum perspiciatis, tempore sapiente neque
          reprehenderit voluptates quaerat ipsa explicabo corporis.
        </p>
      </div>
      <div className="w-full md:w-1/2 md:pr-8 md:border-r md:border-gray-700 md:text-right">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">Quiénes Somos</h3>
        <div className="w-16 md:w-20 h-1 bg-blue-500 mb-6 md:ml-auto"></div>
      </div>
    </article>
  </div>
</section>
        {/* SECCION CONTACTO */}
      <section
        className='bg-ESD-Black'
        id='contacto'
      >
        <article className='mx-auto max-w-screen-md px-4 py-8 lg:py-16'>
          <h2 className='text-gray-900 dark:text-white mb-4 text-center text-4xl font-extrabold tracking-tight'>
            Contactanos!
          </h2>
          <p className='text-gray-500 dark:text-gray-400 mb-8 text-center font-light sm:text-xl lg:mb-16'>
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
                className='text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='bg-gray-50 border-gray-300 text-gray-900 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border p-2.5 text-sm shadow-sm'
                placeholder='johndoe@gmail.com'
                required
              />
            </div>
            <div>
              <label
                htmlFor='subject'
                className='text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium'
              >
                Motivo
              </label>
              <input
                type='text'
                id='subject'
                className='text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light block w-full rounded-lg border p-3 text-sm shadow-sm'
                placeholder='Hazla corta'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label
                htmlFor='message'
                className='text-gray-900 dark:text-gray-300 mb-2 block text-sm font-medium'
              >
                Mensaje
              </label>
              <textarea
                id='message'
                rows={6}
                className='text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border p-2.5 text-sm shadow-sm'
                placeholder='Deja una descripción'
              ></textarea>
            </div>
            <button
              type='submit'
              className='text-white hover:bg-slate-800 dark:bg-gray-700 rounded-lg px-5 py-3 text-center text-sm font-medium focus:outline-none sm:w-fit'
            >
              Enviar
            </button>
          </form>
        </article>
      </section>
  </main>
  )
}
