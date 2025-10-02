"use client"

import { motion, useScroll, useSpring } from "framer-motion"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import SkillsSection from "@/components/sections/skills-section"
import ExperienceSection from "@/components/sections/experience-section"
import ProjectsSection from "@/components/sections/projects-section"
import EducationSection from "@/components/sections/education-section"
import ContactSection from "@/components/sections/contact-section"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <>
      <LoadingScreen />
      <CustomCursor />

      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent origin-left z-50"
        style={{ scaleX }}
      />

      <Navigation />
      <main className="relative overflow-hidden">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
