import { ReactNode } from 'react'

type Project = {
  title: string
  link?: string
  github?: string
  description: ReactNode
}

export const PROJECTS: Project[] = [
  {
    title: 'Project Name',
    link: '#',
    github: '#',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </>
    ),
  },
  {
    title: 'Project Name',
    link: '#',
    github: '#',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </>
    ),
  },
]
