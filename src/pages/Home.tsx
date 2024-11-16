import { Navbar } from '@/components/Navbar'
import { Header } from '@/components/Header'
import { AboutMeSection } from '@/components/AboutMeSection'
import { SkillsSection } from '@/components/SkillsSection'
import { WorkExperienceSection } from '@/components/WorkExperienceSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ContactSection } from '@/components/ContactSection'

export function HomePage() {
  return (
    <div className='min-h-screen bg-background text-foreground' itemScope itemType='https://schema.org/Person'>
      <Navbar />
      <div className='mx-auto max-w-4xl'>
        <Header />
        <main className='mt-8 space-y-16 px-4 pb-4 md:mt-12 md:space-y-24 md:px-8 md:pb-16'>
          <AboutMeSection />
          <SkillsSection />
          <WorkExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
