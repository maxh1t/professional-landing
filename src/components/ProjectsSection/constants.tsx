import { ReactNode } from 'react'

type Project = {
  title: string
  link?: string
  github?: string
  description: ReactNode
}

export const PROJECTS: Project[] = [
  {
    title: 'Professional Landing',
    link: 'https://maxh1t.xyz',
    github: 'https://github.com/maxh1t/professional-landing',
    description: (
      <>
        Developed a React app with Vite and <strong>custom server-side rendering</strong> for SEO and performance
        optimization, including a theme with SSR support.
      </>
    ),
  },
  {
    title: 'Clock',
    github: 'https://github.com/maxh1t/clock',
    description: (
      <>
        Built a clock application with React, featuring alarm, timer, time zones, and stopwatch functionality, with a
        strong focus on <strong>date manipulation</strong> and handling.
      </>
    ),
  },
  {
    title: 'Auth Form',
    github: 'https://github.com/maxh1t/auth-form',
    description: (
      <>
        Created a custom authentication form using React and CSS, <strong>building all components from scratch</strong>{' '}
        without relying on external libraries, ensuring high performance and reusability.
      </>
    ),
  },
]
