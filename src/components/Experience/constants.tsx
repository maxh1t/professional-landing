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
    company: 'Brex',
    start: 'Aug 2023',
    end: 'Present',
    description: [
      <>Optimized rendering performance, reducing transaction reconciliation time from 3 days to 4 hours.</>,
      <>
        Developed a real-time financial analytics dashboard, improving data visualization and reducing corporate expense
        management costs by 35.4%.
      </>,
      <>Decreased fraudulent transactions by 25.8% through an automated monitoring system.</>,
      <>Increased financial department efficiency, cutting report preparation time by 48.6%.</>,
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'Retool',
    start: 'May 2021',
    end: 'Jul 2023',
    description: [
      <>Designed and implemented a dynamic no-code form builder, reducing customer development costs by 34.2%.</>,
      <>Optimized UI state management, reducing user input time by 58.6%.</>,
      <>Led frontend development for product expansion, increasing the active user base by 25.3%.</>,
      <>
        Managed and mentored a team of 5 frontend engineers, improving release efficiency by 41.7% and cutting
        production bugs by 30.9% through robust testing and CI/CD integration.
      </>,
    ],
  },
  {
    title: 'Frontend Engineer',
    company: 'ServiceNow',
    start: 'Jan 2019',
    end: 'Apr 2021',
    description: [
      <>Reduced IT support workload by 38.7% by developing a self-service portal for automated request handling.</>,
      <>Improved internal business processes, reducing average task completion time by 29.5%.</>,
      <>Increased employee satisfaction, raising the IT support CSI score from 3.8 to 4.4.</>,
      <>Optimized the frontend’s performance and load efficiency, lowering IT infrastructure costs by 24.8%.</>,
    ],
  },
]
