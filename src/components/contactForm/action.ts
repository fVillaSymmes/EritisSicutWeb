import z from 'zod'
import { createServerAction } from 'zsa'

const formInputs = z.object({
  email: z
    .string()
    .max(254, {
      message: 'La dirección de correo electrónico es demasiado larga.',
    })
    .email({ message: 'La dirección de correo electrónico es inválida.' }),
  subject: z.string().max(50),
  message: z.string().min(10).max(10000),
})

export const produceNewMessage = createServerAction()
  .input(formInputs, { type: 'formData' })
  .handler(async ({ input }) => {
    // your action logic here
    return {
      email: input.email,
      subject: input.subject,
      message: input.message,
    }
  })
