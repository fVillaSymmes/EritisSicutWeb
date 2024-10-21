
import { Description } from '@radix-ui/react-toast';
import { ArrowRight, FileText, Shield, Users, LucideBookOpenText } from 'lucide-react';

//Analizar si consideramos entrar a FECU SOCIAL para balances, memorias y transparencias. Por lo menos revisarlo
//para ver alguna estructura de balances
export const metadata = {
  title : 'Página de transparencia | Eritis Sicut Dei',
  description : 'Accede a nuestras memorias y balances generales',
  keywords : ['transparencia', 'balance general'],
  
  openGraph : {
    title : 'Página de transparencia | Eritis Sicut Dei',
    description : 'Accede a nuestras memorias y balances generales',
    // url: 'eritispuntocom' 
    type: 'website',
  }
}



export default function Transparencia() {
  return (
    <section className='overflow-hidden bg-black text-white'>
  <div className='container mx-auto px-4 lg:px-8 sm:px-6'>
    <div className='flex flex-col items-center justify-between py-12 sm:py-12 lg:py-24'>
      <div className='mb-8 w-full text-center'>
        <div className='relative mb-6 flex items-center justify-center'>
          <div className='absolute left-0 top-1/2 h-px w-1/4 bg-white'></div>
          <h1 className='relative z-10 mb-4 inline-block bg-black px-4 font-headings text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl'>
            Transparencia
          </h1>
          <div className='absolute right-0 top-1/2 h-px w-1/4 bg-white'></div>
        </div>
        <p className='mb-6 text-gray-300 text-lg'>
          Nuestro compromiso con la transparencia y la integridad en todo lo que hacemos.
        </p>
      </div>
    </div>
  </div>

  <div className='container mx-auto px-4 py-16 lg:px-8 sm:px-6 flex justify-center items-center'>
    <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
      
      <div className='rounded-lg bg-gray-900 p-6 text-center'>
        <a href="/pdfs/Platon-Fedon.pdf" download>
          <FileText className="mb-4 h-12 w-12 text-white mx-auto cursor-pointer" />
        </a>
        <h2 className='mb-2 text-xl font-semibold'>Documentos Oficiales</h2>
        <p className='text-gray-300'>Accede a los documentos que nos acreditan como fundación</p>
      </div>

      <div className='rounded-lg bg-gray-900 p-6 text-center'>
        <a href="/pdfs/Platon-Fedon.pdf" download>
          <LucideBookOpenText className="mb-4 h-12 w-12 text-white-500 mx-auto cursor-pointer" />
        </a>
        <h2 className='mb-2 text-xl font-semibold'>Recuento 2025</h2>
        <p className='text-gray-300'>Presentación estandar de memoria y balance 2666</p>
      </div>

    </div>
  </div>

  <div className='bottom-0 left-0 right-0 h-8'></div>
</section>
  );
}