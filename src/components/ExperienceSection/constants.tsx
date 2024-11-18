import { ReactNode } from 'react'

type Job = {
  title: string
  company: string
  location: string
  start: string
  end: string
  description: ReactNode[]
}
export const JOBS: Job[] = [
  {
    title: 'Front-End Engineer',
    company: 'Raiffeisen Bank',
    location: 'Remote',
    start: 'Apr 2024',
    end: 'Present',
    description: [
      <>
        Reused 70% of business logic to expand the internal chat platform, <strong>saving six months</strong> of UI
        development time.
      </>,
      <>Enhanced platform performance by 30% while adding new features and maintaining scalability.</>,
      <>
        Independently developed and <strong>integrated a micro-frontend</strong> for a large-scale platform.
      </>,
      <>
        {' '}
        Designed the build process and implemented <strong>CI/CD pipelines</strong>, reducing build times by 40%.
      </>,
    ],
  },
  {
    title: 'Front-End Engineer',
    company: 'Toolkit',
    location: 'Remote',
    start: 'Mar 2023',
    end: 'Mar 2024',
    description: [
      <>
        Designed and architected three applications for the <strong>warehouse management system</strong> from scratch,
        including both business logic and application structure.
      </>,
      <>
        Identified and implemented the right level of abstraction to support project <strong>scalability</strong> and
        future extensions.
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
    location: 'Remote',
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
