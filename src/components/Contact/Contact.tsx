import { Clock } from '@/client/assets/icons/Clock'
import { Mail } from '@/client/assets/icons/Mail'
import { MapPin } from '@/client/assets/icons/MapPin'

import { SOCIAL_LINKS } from './constants'

export function Contact() {
  return (
    <section id='contact' className='scroll-mt-20 space-y-8'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Contact</h2>
      <div className='mt-6 space-y-4 text-left'>
        <div className='flex items-center space-x-3'>
          <Mail />
          <a
            href='mailto:m4xh17@gmail.com'
            className='text-base text-primary hover:underline md:text-lg'
            itemProp='email'
          >
            m4xh17@gmail.com
          </a>
        </div>
        <div className='flex items-center space-x-3'>
          <Clock />
          <span className='text-base text-primary md:text-lg'>UTC +7</span>
        </div>
        <div className='flex items-center space-x-3'>
          <MapPin />
          <span className='text-base text-primary md:text-lg' itemProp='address'>
            Da Nang, Vietnam
          </span>
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
