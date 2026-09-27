import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { AutomationLab } from './components/AutomationLab';
import { InfrastructureLab } from './components/InfrastructureLab';
import { LearningRoadmap } from './components/LearningRoadmap';
import { SkillsSearch } from './components/SkillsSearch';
import { CareerAssistant } from './components/CareerAssistant';
import { Resume } from './components/Resume';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {/* Top Fixed Navigation Bar */}
        <Navbar onOpenResumeModal={() => setResumeModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenResumeModal={() => setResumeModalOpen(true)} />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <AutomationLab />
          <InfrastructureLab />
          <LearningRoadmap />
          <SkillsSearch />
          <CareerAssistant />
          <Resume onOpenResumeModal={() => setResumeModalOpen(true)} />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Printable / Interactive Resume Modal */}
        <ResumeModal
          isOpen={resumeModalOpen}
          onClose={() => setResumeModalOpen(false)}
        />
      </div>
    </LanguageProvider>
  );
}

