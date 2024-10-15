import { EmailTemplate } from '@/components/email-template.tsx/email-template'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { email, subject, message } = await request.json()

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['fivillasymmes@gmail.com'],
      subject: subject,
      react: EmailTemplate({
        email: email,
        subject: subject,
        message: message,
      }),
    })

    if (error) {
      return Response.json({ error }, { status: 500 })
    }

    return Response.json(data)
  } catch (error) {
    return Response.json({ error }, { status: 500 })
  }
}
