import { GitHub } from '@/client/assets/icons/GitHub'
import { Link } from '@/client/assets/icons/Link'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/client/components/ui'

import { PROJECTS } from './constants'

export function Projects() {
  return (
    <section id='projects' className='scroll-mt-20 space-y-4'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Projects</h2>
      <div className='mt-6 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0'>
        {PROJECTS.map(({ title, description, link, github }) => (
          <Card key={title} className='flex flex-col justify-between'>
            <CardHeader className='pb-4'>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardFooter className='flex gap-4'>
              {link && (
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Visit ${title}`}
                  className='text-primary'
                >
                  <Link className='size-5' />
                </a>
              )}
              {github && (
                <a
                  href={github}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`GitHub Repository for ${title}`}
                  className='text-primary'
                >
                  <GitHub className='size-5' />
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
