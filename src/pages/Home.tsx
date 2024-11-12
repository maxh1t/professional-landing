import { Button } from '@/components/ui'

export function HomePage() {
  return (
    <div>
      {/* eslint-disable-next-line no-console */}
      <Button onClick={() => console.log(import.meta.env.MODE, 'mode')}>123</Button>
    </div>
  )
}
