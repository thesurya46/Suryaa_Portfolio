import { useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { FloatingNav } from './components/FloatingNav';
import { BackToTop } from './components/BackToTop';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { AskQuestionSection } from './components/AskQuestionSection';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Set dark theme background
    document.body.style.backgroundColor = '#0B0F19';
    document.body.style.overflow = 'auto';
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.overflow = '';
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white antialiased">
      {/* Custom Cursor Effect */}
      <CustomCursor />
      
      {/* Floating Navigation */}
      <FloatingNav />
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Main Content */}
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
        <AskQuestionSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}