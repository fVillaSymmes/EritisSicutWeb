import ContactForm from '@/components/contactForm/contactForm'
import { AccordionDemo } from '@/components/accordion/Accordion'
import HeroSection from '@/components/heroSection/HeroSection'

export default function HomePage() {
  return (
    <main className='bg-black'>
      <HeroSection />

      <section className='mx-4 bg-black text-white'>
        <AccordionDemo />
      </section>

      <ContactForm />
    </main>
  )
}
