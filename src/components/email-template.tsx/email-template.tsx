interface ContactEmailTemplateProps {
  email: string
  message: string
  subject: string
}

export const EmailTemplate: React.FC<Readonly<ContactEmailTemplateProps>> = ({
  email,
  message,
  subject,
}) => (
  <div>
    <h1>¡Tienes un nuevo mensaje de {email}!</h1>
    <h2>Asunto: {subject}</h2>
    <h2>Mensaje: </h2>
    <p>{message}</p>
  </div>
)
