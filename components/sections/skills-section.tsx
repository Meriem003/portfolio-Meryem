"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code2, Palette, Database, Wrench, Server, ChevronLeft, ChevronRight } from "lucide-react"

const skillCategories = [
  {
    title: "Langages",
    icon: Code2,
    color: "from-primary to-secondary",
    skills: [
      { name: "Java", level: 95 },
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Frameworks",
    icon: Server,
    color: "from-secondary to-accent",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Spring Boot", level: 85 },
      { name: "Angular", level: 80 },
      { name: "React.js", level: 85 },
      { name: "TailwindCSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Technologies / Standards",
    icon: Palette,
    color: "from-accent to-primary",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "API REST", level: 85 },
    ],
  },
  {
    title: "Bases de données",
    icon: Database,
    color: "from-primary via-secondary to-accent",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: "Tests",
    icon: Code2,
    color: "from-secondary to-primary",
    skills: [
      { name: "JUnit", level: 85 },
      { name: "Mockito", level: 80 },
      { name: "PHPUnit", level: 80 },
    ],
  },
  {
    title: "Outils",
    icon: Wrench,
    color: "from-accent to-secondary",
    skills: [
      { name: "Jira", level: 85 },
      { name: "Figma", level: 80 },
      { name: "Git", level: 90 },
      { name: "Postman", level: 85 },
      { name: "Draw.io", level: 75 },
      { name: "Docker", level: 80 },
      { name: "Jenkins", level: 75 },
      { name: "CI/CD", level: 80 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount
      
      scrollContainerRef.current.scrollTo({
        left: newPosition,
        behavior: 'smooth'
      })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 gradient-animated" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-primary">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un arsenal complet de technologies modernes pour créer des expériences web exceptionnelles
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex justify-end gap-2 mb-6"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className="rounded-full bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/50 disabled:opacity-30 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className="rounded-full bg-card/80 backdrop-blur-sm border-primary/20 hover:bg-primary/10 hover:border-primary/50 disabled:opacity-30 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </motion.div>

          {/* Scrollable Cards Container */}
          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-6 scroll-smooth scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: categoryIndex * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="group flex-shrink-0 w-80 snap-center"
                >
                  <Card className="p-6 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-500 h-full hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden rounded-2xl">
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                    initial={false}
                  />
                  
                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-10 right-10 w-20 h-20 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-30 animate-pulse`} />
                    <div className={`absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br ${category.color} rounded-full blur-2xl opacity-20 animate-pulse`} style={{ animationDelay: '1s' }} />
                  </div>

                  <div className="relative z-10">
                    <motion.div 
                      className="flex items-center gap-3 mb-6"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <motion.div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, type: "spring" }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                    </motion.div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ 
                            duration: 0.5, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            type: "spring",
                            stiffness: 100
                          }}
                          whileHover={{ x: 3 }}
                          className="group/skill"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-xs font-semibold text-foreground/90 group-hover/skill:text-primary transition-colors duration-300">
                              {skill.name}
                            </span>
                            <motion.span 
                              className="text-xs font-bold text-primary px-1.5 py-0.5 rounded bg-primary/10"
                              whileHover={{ scale: 1.1 }}
                            >
                              {skill.level}%
                            </motion.span>
                          </div>
                          <div className="h-2 bg-muted/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{
                                duration: 1.2,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                ease: [0.4, 0, 0.2, 1],
                              }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative shadow-sm`}
                              whileHover={{ opacity: 0.9 }}
                            >
                              <motion.div 
                                className="absolute inset-0 bg-white/30 rounded-full" 
                                animate={{
                                  x: ['-100%', '100%']
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  ease: "linear",
                                  repeatDelay: 0.5
                                }}
                              />
                              <div className="absolute right-0 top-0 bottom-0 w-0.5 bg-white/50 rounded-full" />
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {["Full Stack", "Agile/Scrum", "REST API", "Responsive Design", "Git Flow", "Problem Solving"].map(
              (badge, index) => (
                <motion.span
                  key={badge}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-sm font-medium text-foreground backdrop-blur-sm hover:shadow-lg hover:shadow-primary/20 transition-all cursor-default"
                >
                  {badge}
                </motion.span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
