import { SVGProps } from 'react'

export function GitHub(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      role='img'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='currentColor'
      {...props}
    >
      <title>GitHub</title>
      <path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.111.82-.26.82-.577v-2.17c-3.338.726-4.04-1.415-4.04-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.835 2.805 1.304 3.492.997.108-.776.418-1.304.76-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.47-2.38 1.235-3.22-.123-.305-.535-1.527.117-3.176 0 0 1.008-.323 3.3 1.23a11.518 11.518 0 0 1 3.003-.403c1.018.005 2.043.137 3.003.403 2.29-1.553 3.296-1.23 3.296-1.23.653 1.649.24 2.87.117 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.62-5.48 5.92.43.37.823 1.1.823 2.22v3.293c0 .32.217.694.825.575C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z' />
    </svg>
  )
}