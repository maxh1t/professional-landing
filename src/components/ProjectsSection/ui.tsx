import { ExternalLink } from 'lucide-react'

import { PROJECTS } from './constants'

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import { GitHub } from '@/assets/icons/GitHub'

export function ProjectsSection() {
  return (
    <section id='projects' className='scroll-mt-20 space-y-4'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Projects</h2>
      <ul className='mt-6 space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0'>
        {PROJECTS.map(({ id, title, description, link, github }) => (
          <Card key={id} className='flex flex-col justify-between'>
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
                  <ExternalLink className='size-5' />
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
      </ul>
    </section>
  )
}
