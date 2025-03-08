import { About } from '@/client/components/About'
import { Articles } from '@/client/components/Articles'
import { Contact } from '@/client/components/Contact'
import { Experience } from '@/client/components/Experience'
import { Header } from '@/client/components/Header'
import { Navbar } from '@/client/components/Navbar'
import { Projects } from '@/client/components/Projects'
import { Skills } from '@/client/components/Skills'

export function Home() {
  return (
    <div className='h-screen min-h-screen bg-background text-foreground' itemScope itemType='https://schema.org/Person'>
      <Navbar />
      <div className='mx-auto max-w-4xl'>
        <Header />
        <main className='mt-8 space-y-16 px-4 pb-4 md:mt-12 md:space-y-24 md:px-8 md:pb-16'>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Articles />
          <Contact />
        </main>
      </div>
    </div>
  )
}
