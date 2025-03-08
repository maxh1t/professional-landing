import { Badge } from '@/client/components/ui'

import { SKILLS } from './constants'

export function Skills() {
  return (
    <section id='skills' className='scroll-mt-20'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Skills</h2>
      <div className='mt-4 flex flex-wrap gap-2 md:gap-3'>
        {SKILLS.map((skill) => (
          <Badge key={skill} size='large'>
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
