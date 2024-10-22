import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

type AccordionProps = {
  title: string
  corpus: string
  itemValue: string
  id: string
}

export const AccordionSingle: React.FC<AccordionProps> = ({
  title,
  corpus,
  itemValue,
  id,
}) => {
  return (
    <AccordionItem
      value={itemValue}
      id={id}
    >
      <AccordionTrigger className={`font-headings text-xl sm:text-2xl`}>
        {title}
      </AccordionTrigger>
      <AccordionContent className='font-body text-lg'>
        {corpus}
      </AccordionContent>
    </AccordionItem>
  )
}
