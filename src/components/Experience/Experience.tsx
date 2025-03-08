import { JOBS } from './constants'

export function Experience() {
  return (
    <section id='experience' className='scroll-mt-20 space-y-4'>
      <h2 className='text-left text-2xl font-semibold md:text-3xl'>Experience</h2>
      <div className='mt-4 space-y-6'>
        {JOBS.map(({ title, company, start, end, description }) => (
          <article key={`${title}-${start}-${end}`} itemProp='jobTitle'>
            <h3 className='text-lg md:text-xl'>
              {company} | {title}
            </h3>
            <p className='text-muted-foreground'>
              {start} - {end}
            </p>
            <div className='mt-2 text-sm md:mt-3 md:text-base'>
              <ul className='list-disc space-y-1 pl-5'>
                {description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
