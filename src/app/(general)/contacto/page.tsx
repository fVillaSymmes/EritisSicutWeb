export default function Contacto() {
  return (
    <main className='flex flex-col items-center pt-8 bg-custom'>
      <h1 className='text-6xl'>Contacto</h1>
      <div className='md:m mx-auto my-6 max-w-md rounded-md bg-slate-800 p-4 shadow-md'>
        <h2 className='mb-6 text-2xl font-semibold'>Get in Touch</h2>
        <form
          action='#'
          method='POST'
        >
          <div className='mb-4'>
            <label
              htmlFor='name'
              className='mb-2 block text-sm font-bold text-gray-700'
            >
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='John Doe'
              required
              className='w-full rounded-md border px-3 py-2 text-black focus:border-blue-500 focus:outline-none'
            />
          </div>
          <div className='mb-4'>
            <label
              htmlFor='email'
              className='mb-2 block text-sm font-bold text-gray-700'
            >
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='john@example.com'
              required
              className='w-full rounded-md border px-3 py-2 text-black focus:border-blue-500 focus:outline-none'
            />
          </div>
          <div className='mb-6'>
            <label
              htmlFor='message'
              className='mb-2 block text-sm font-bold text-gray-700'
            >
              Your Message
            </label>
            <textarea
              id='message'
              name='message'
              rows={4}
              placeholder='How can we help you?'
              className='w-full rounded-md border px-3 py-2 text-black focus:border-blue-500 focus:outline-none'
            ></textarea>
          </div>
          <button
            type='submit'
            className='focus:shadow-outline-blue rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none'
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  )
}
