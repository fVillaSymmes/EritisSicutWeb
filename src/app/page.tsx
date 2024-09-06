import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ContactForm from '@/components/contactForm/contactForm'

export default function HomePage() {
  return (
    <main className='bg-ESD-Black'>
      <section className='overflow-hidden bg-black text-white'>
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
                <Button
                  size='lg'
                  className='bg-white text-black hover:bg-gray-200'
                >
                  Our Projects
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-white hover:bg-white hover:text-black'
                >
                  Get Involved
                </Button>
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

      <section className='min-h my-10 flex flex-col gap-6 bg-black py-12 text-white'>
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

      <ContactForm />
    </main>
  )
}
