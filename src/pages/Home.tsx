import { AboutSection } from '@/components/AboutSection'
import { ContactSection } from '@/components/ContactSection'
import { ExperienceSection } from '@/components/ExperienceSection'
import { Header } from '@/components/Header'
import { Navbar } from '@/components/Navbar'
import { ProjectsSection } from '@/components/ProjectsSection'
import { SkillsSection } from '@/components/SkillsSection'

export function HomePage() {
  return (
    <div className='min-h-screen bg-background text-foreground' itemScope itemType='https://schema.org/Person'>
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
    </div>
  )
}
