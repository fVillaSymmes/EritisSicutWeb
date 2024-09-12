import { AccordionContainer } from '@/components/accordionContainer/AccordionContainer'
import ContactForm from '@/components/contactForm/contactForm'
import HeroSection from '@/components/heroSection/HeroSection'

export default function HomePage() {
  return (
    <main className='bg-black'>
      <HeroSection />

      <section className='mx-4 bg-black text-white sm:mx-16'>
        <AccordionContainer />
      </section>

      <ContactForm />
    </main>
  )
}
