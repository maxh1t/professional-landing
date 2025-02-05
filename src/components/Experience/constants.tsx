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
    title: 'Full-Stack Engineer',
    company: 'Brex',
    start: 'Aug 2023',
    end: 'Present',
    description: [
      <>Improved financial control, reducing transaction reconciliation time from 3 days to 4 hours.</>,
      <>Reduced corporate expense management costs by 35.4% with a real-time financial analytics dashboard.</>,
      <>Decreased fraudulent transactions by 25.8% through an automated monitoring system.</>,
      <>Increased financial department efficiency, cutting report preparation time by 50.6%.</>,
    ],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'Retool',
    start: 'May 2021',
    end: 'Jul 2023',
    description: [
      <>Accelerated data collection and processing, reducing user input time by 58.6%.</>,
      <>Reduced customer development costs by 34.2% by building a no-code form builder.</>,
      <>Expanded product functionality, increasing the active user base by 25.3%.</>,
      <>Led a team of 5 engineers, improving release speed by 41.7% and reducing production bugs by 30.9%.</>,
    ],
  },
  {
    title: 'Full-Stack Engineer',
    company: 'ServiceNow',
    start: 'Jan 2019',
    end: 'Apr 2021',
    description: [
      <>Reduced IT support workload by 38.7% by developing a self-service portal for automated request handling.</>,
      <>Improved internal business processes, reducing average task completion time by 29.5%.</>,
      <>Increased employee satisfaction, raising the IT support CSI score from 3.8 to 4.4.</>,
      <>Lowered IT infrastructure costs by 24.8% through system optimization and reduced server load.</>,
    ],
  },
]
