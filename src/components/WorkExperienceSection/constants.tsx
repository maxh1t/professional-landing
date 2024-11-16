import { ReactNode } from 'react'

type Job = {
  title: string
  company: string
  location: string
  start: string
  end: string
  description: ReactNode | ReactNode[]
}
export const JOBS: Job[] = [
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    location: 'Remote',
    start: 'Jan 2020',
    end: 'Present',
    description: [
      <>
        Integrated into the internal chat platform. Refactored the project and brought it to a new level of modularity,
        which increased the speed of adding new features by 40% and reused 70% of the logic without losing application
        performance.
      </>,
      <>
        Integrated into the internal chat platform. Refactored the project and brought it to a new level of modularity,
        which increased the speed of adding new features by <b>40%</b> and reused 70% of the logic without losing
        application performance.
      </>,
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    location: 'Remote',
    start: 'Jan 2020',
    end: '123',
    description: [
      <>
        Integrated into the internal chat platform. Refactored the project and brought it to a new level of modularity,
        which increased the speed of adding new features by 40% and reused 70% of the logic without losing application
        performance.
      </>,
      <>
        Integrated into the internal chat platform. Refactored the project and brought it to a new level of modularity,
        which increased the speed of adding new features by <b>40%</b> and reused 70% of the logic without losing
        application performance.
      </>,
    ],
  },
  {
    title: 'Frontend Developer',
    company: 'Company Name',
    location: 'Remote',
    start: 'Jan 2020',
    end: 'Feb 2022',
    description: (
      <>
        Integrated into the internal chat platform. Refactored the project and brought it to a new level of modularity,
        which increased the speed of adding new features by 40% and reused 70% of the logic without losing application
        performance.
      </>
    ),
  },
]
