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
        Developed a React app with Vite and custom server-side rendering for SEO and performance optimization, including
        a theme with SSR support.
      </>
    ),
  },
  {
    title: 'Clock',
    link: 'https://clock.maxh1t.xyz',
    github: 'https://github.com/maxh1t/clock-app',
    description: (
      <>
        Built a clock application with React, featuring alarm, timer, time zones, and stopwatch functionality, with a
        strong focus on date manipulation and handling.
      </>
    ),
  },
  {
    title: 'Auth Form',
    link: 'https://auth-form.maxh1t.xyz',
    github: 'https://github.com/maxh1t/auth-form',
    description: (
      <>
        Created a custom authentication form using React and CSS, building all components from scratch without relying
        on external libraries, ensuring high performance and reusability.
      </>
    ),
  },
]
