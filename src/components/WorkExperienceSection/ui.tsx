import { JOBS } from './constants'

export function WorkExperienceSection() {
  return (
    <section id='experience' className='scroll-mt-20 space-y-4'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Work Experience</h2>
      <div className='mt-4 space-y-6'>
        {JOBS.map(({ title, company, start, end, description, location }) => (
          <article key={`${title}-${start}-${end}`} itemProp='jobTitle'>
            <h3 className='text-lg font-bold md:text-xl'>{title}</h3>
            <p className='text-xs text-muted-foreground md:text-sm' itemProp='worksFor'>
              {company} | {location}
            </p>
            <p className='text-xs text-muted-foreground md:text-sm'>
              {start} - {end}
            </p>
            <div className='mt-2 text-sm md:mt-3 md:text-base'>
              {Array.isArray(description) ? (
                <ul className='list-disc space-y-1 pl-5'>
                  {description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{description}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
