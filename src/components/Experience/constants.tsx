import { ReactNode } from 'react'

type Job = {
  title: string
  company: string
  start: string
  end: string
  description: ReactNode[]
}
export const JOBS: Job[] = [
  {
    title: 'Frontend Engineer',
    company: 'Company 3',
    start: 'Start Date',
    end: 'Present',
    description: [
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Company 2',
    start: 'Start Date',
    end: 'End Date',
    description: [
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Company 3',
    start: 'Start Date',
    end: 'End Date',
    description: [
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
      <>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</>,
    ],
  },
]
