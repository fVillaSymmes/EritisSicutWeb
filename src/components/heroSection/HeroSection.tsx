import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className='overflow-hidden bg-black text-white'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col items-center justify-between py-12 lg:flex-row lg:py-24'>
          <div className='mb-8 w-full text-center lg:mb-0 lg:w-1/2 lg:text-left'>
            <h1 className='mb-4 font-headings text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
              Encendiendo Iniciativas Culturales
            </h1>
            <p className='mx-auto mb-8 max-w-lg font-body text-xl sm:text-2xl lg:mx-0'>
              Fundación para el rescate y promoción del patrimonio cultural
              Eritis Sicut Dei
            </p>
            <div className='flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start'>
              <Button
                size='lg'
                className='bg-white text-black hover:bg-gray-200'
              >
                <Link href={'#content'}>Saber más</Link>
              </Button>
            </div>
          </div>
          <div className='flex w-full justify-center lg:w-1/2 lg:justify-end'>
            <div className='relative h-64 w-64 sm:h-80 sm:w-80 lg:h-96 lg:w-96'>
              <Image
                priority
                src='/img/logo_black.png'
                alt='Eritis Sicut Dei Logo'
                fill
                className='animate-float object-contain'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bottom-0 left-0 right-0 h-8'></div>
    </section>
  )
}
