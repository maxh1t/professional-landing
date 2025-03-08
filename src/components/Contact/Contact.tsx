import { Mail } from '@/client/assets/icons/Mail'

import { EMAIL, SOCIAL_LINKS } from './constants'

export function Contact() {
  return (
    <section id='contact' className='scroll-mt-20 space-y-8'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Contact</h2>
      <div className='mt-6 space-y-4 text-left'>
        <div className='flex items-center space-x-3'>
          <Mail />
          <a href={`mailto:${EMAIL}`} className='text-base text-primary hover:underline md:text-lg' itemProp='email'>
            {EMAIL}
          </a>
        </div>
      </div>
      <div className='mt-6 flex flex-wrap items-center gap-4 md:gap-6'>
        {SOCIAL_LINKS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={label}
            className='text-primary'
          >
            <Icon className='size-6' />
          </a>
        ))}
      </div>
    </section>
  )
}
