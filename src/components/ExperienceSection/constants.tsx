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
    title: 'Front-End Engineer',
    company: 'Raiffeisen Bank',
    start: 'Apr 2024',
    end: 'Present',
    description: [
      <>
        Integrated a messenger into a hotline system, improving performance by <strong>40%</strong> and{' '}
        <strong>saving 6 months of development time</strong>.
      </>,
      <>
        Designed a modular architecture, accelerating feature delivery by <strong>25%</strong>.
      </>,
      <>
        Developed and embedded two micro-frontends into an internal platform, enhancing user experience and optimizing
        platform efficiency.
      </>,
      <>
        Set up CI/CD pipelines, reducing build times by <strong>40%</strong>.
      </>,
    ],
  },
  {
    title: 'Front-End Engineer',
    company: 'Toolkit',
    start: 'Mar 2023',
    end: 'Mar 2024',
    description: [
      <>
        Designed and architected three applications for the <strong>warehouse management system</strong> from scratch,
        including both business logic and application structure.
      </>,
      <>
        Implemented <strong>custom server-side rendering</strong> with React.js, improving application security and
        increasing page load speed by <strong>30%</strong>.
      </>,
      <>
        Achieved and maintained <strong>100% test coverage</strong> while ensuring ease of project expansion.
      </>,
      <>
        Enabled <strong>40% faster workflows</strong> for warehouse users by improving application usability and
        functionality.
      </>,
      <>
        Successfully migrated significant warehouse operations to the new system within <strong>three weeks</strong>{' '}
        with minimal disruption.
      </>,
    ],
  },
  {
    title: 'Front-End Engineer',
    company: 'GCode',
    start: 'Nov 2021',
    end: 'Feb 2023',
    description: [
      <>
        Collaborated with a team of six developers to build and optimize a <strong>VPN service</strong> with seamless
        API integration and a user-friendly interface.
      </>,
      <>
        <strong>Improved code quality</strong> and <strong>reduced development time by 35%</strong> through the
        implementation of best practices and collaboration with senior developers.
      </>,
      <>
        Supported a growing user base, achieving over <strong>1,000 active users</strong> in a startup environment.
      </>,
    ],
  },
]
