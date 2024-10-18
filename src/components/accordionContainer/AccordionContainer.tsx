import { Accordion } from '@/components/ui/accordion'
import { AccordionSingle } from '../accordionSingle/AccordionSingle'

const accordionItems = [
  {
    title: 'Manifiesto',
    corpus:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur maiores pariatur, modi, quibusdam quasi delectus nobis dolore temporibus suscipit, cupiditate possimus consequuntur adipisci impedit sed fugit quia iure repellendus velit voluptatum dolor amet deleniti! Totam aspernatur cupiditate nam numquam fuga incidunt pariatur harum quasi, vitae expedita quaerat, minus voluptatum ipsum exercitationem consectetur perferendis ullam ex doloremque! Quam nihil et impedit dolorum velit molestiae, cupiditate ipsam rerum, incidunt ut nemo minus eveniet! Debitis laborum dolor aliquid ratione, fuga enim est vero qui voluptate reiciendis, doloribus voluptatum ea facere, placeat itaque similique nulla. Sed non amet soluta sapiente eius at necessitatibus voluptate officiis eum dolores culpa sunt qui vitae eaque, porro nulla voluptatem pariatur beatae? Nulla, vero recusandae! In expedita, magnam vitae est similique quidem ut repellat consequuntur iste officiis, unde molestias eos assumenda. Eos architecto repellat labore similique, pariatur fugit molestias fugiat praesentium. Obcaecati, dignissimos eaque, nam provident pariatur quia error excepturi cupiditate ab totam exercitationem voluptatem? Maiores, libero unde vero ut quidem tempore ducimus ex laboriosam deleniti ad quod enim eos et facere accusantium fuga quis pariatur eligendi eaque voluptatum. Eaque voluptas debitis totam nulla velit hic repellat amet. Tempora quos dolorem excepturi unde quaerat? Consequatur, ad laborum! Est?',
    itemValue: 'item-1',
    id: 'manifiesto',
  },
  {
    title: 'Misión - Visión',
    corpus:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem tenetur maiores pariatur, modi, quibusdam quasi delectus nobis dolore temporibus suscipit, cupiditate possimus consequuntur adipisci impedit sed fugit quia iure repellendus velit voluptatum dolor amet deleniti! Totam aspernatur cupiditate nam numquam fuga incidunt pariatur harum quasi, vitae expedita quaerat, minus voluptatum ipsum exercitationem consectetur perferendis ullam ex doloremque! Quam nihil et impedit dolorum velit molestiae, cupiditate ipsam rerum, incidunt ut nemo minus eveniet! Debitis laborum dolor aliquid ratione, fuga enim est vero qui voluptate reiciendis, doloribus voluptatum ea facere, placeat itaque similique nulla. Sed non amet soluta sapiente eius at necessitatibus voluptate officiis eum dolores culpa sunt qui vitae eaque, porro nulla voluptatem pariatur beatae? Nulla, vero recusandae! In expedita, magnam vitae est similique quidem ut repellat consequuntur iste officiis, unde molestias eos assumenda. Eos architecto repellat labore similique, pariatur fugit molestias fugiat praesentium. Obcaecati, dignissimos eaque, nam provident pariatur quia error excepturi cupiditate ab totam exercitationem voluptatem? Maiores, libero unde vero ut quidem tempore ducimus ex laboriosam deleniti ad quod enim eos et facere accusantium fuga quis pariatur eligendi eaque voluptatum. Eaque voluptas debitis totam nulla velit hic repellat amet. Tempora quos dolorem excepturi unde quaerat? Consequatur, ad laborum! Est?',
    itemValue: 'item-2',
    id: 'mision-Vision',
  },
 
]

export function AccordionContainer() {
  return (
    <Accordion
      type='single'
      collapsible
      className='w-full'
    >
      {accordionItems.map((item) => {
        return (
          <AccordionSingle
            {...item}
            key={item.itemValue}
            id={item.id}
          />
        )
      })}
    </Accordion>
  )
}
