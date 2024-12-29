import { AboutSection } from '@/client/components/AboutSection'
import { ContactSection } from '@/client/components/ContactSection'
import { ExperienceSection } from '@/client/components/ExperienceSection'
import { Header } from '@/client/components/Header'
import { Navbar } from '@/client/components/Navbar'
import { ProjectsSection } from '@/client/components/ProjectsSection'
import { SkillsSection } from '@/client/components/SkillsSection'
import { ScrollArea } from '@/client/components/ui'

export function Home() {
  return (
    <ScrollArea
      id='scroll-area'
      className='h-screen min-h-screen bg-background text-foreground'
      itemScope
      itemType='https://schema.org/Person'
    >
      <Navbar />
      <div className='mx-auto max-w-4xl'>
        <Header />
        <main className='mt-8 space-y-16 px-4 pb-4 md:mt-12 md:space-y-24 md:px-8 md:pb-16'>
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </ScrollArea>
  )
}
