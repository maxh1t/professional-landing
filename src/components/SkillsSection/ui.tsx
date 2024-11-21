import { Badge } from '@/components/ui'

import { SKILLS } from './constants'

export function SkillsSection() {
  return (
    <section className='scroll-mt-20 space-y-4'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Skills</h2>
      <div className='mt-4 flex flex-wrap gap-2 md:gap-4'>
        {SKILLS.map((skill) => (
          <Badge key={skill}>{skill}</Badge>
        ))}
      </div>
    </section>
  )
}
