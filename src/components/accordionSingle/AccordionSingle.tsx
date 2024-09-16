import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type AccordionProps = {
  title: string
  corpus: string
  itemValue: string
}

export const AccordionSingle: React.FC<AccordionProps> = ({
  title,
  corpus,
  itemValue,
}) => {
  return (
    <AccordionItem value={itemValue}>
      <AccordionTrigger className={`font-headings text-xl sm:text-2xl`}>
        {title}
      </AccordionTrigger>
      <AccordionContent className='font-body text-lg'>
        {corpus}
      </AccordionContent>
    </AccordionItem>
  )
}
