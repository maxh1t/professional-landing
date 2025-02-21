import { Badge } from '@/client/components/ui'

import { ARTICLES } from './constants'

export function Articles() {
  return (
    <section id='articles' className='scroll-mt-20 space-y-4'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Articles</h2>
      <div className='mt-6 md:gap-6'>
        {ARTICLES.map(({ title, link }) =>
          link ? (
            <a
              key={title}
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={`Visit ${title}`}
              className='flex items-center justify-between border-b py-4 hover:underline'
            >
              {title}
            </a>
          ) : (
            <div key={title} className='flex items-center justify-between gap-2 border-b py-4'>
              {title}
              <Badge variant='outline' className='h-fit whitespace-nowrap'>
                Upcoming
              </Badge>
            </div>
          ),
        )}
      </div>
    </section>
  )
}
