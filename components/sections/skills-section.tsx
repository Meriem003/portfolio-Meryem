"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Code2, Palette, Database, Wrench, Server } from "lucide-react"

const skillCategories = [
  {
    title: "Langages",
    icon: Code2,
    color: "from-primary to-secondary",
    skills: [
      { name: "PHP", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "Go", level: 70 },
      { name: "C", level: 75 },
    ],
  },
  {
    title: "Frontend",
    icon: Palette,
    color: "from-secondary to-accent",
    skills: [
      { name: "React.js", level: 85 },
      { name: "Angular", level: 80 },
      { name: "TailwindCSS", level: 90 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    color: "from-accent to-primary",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Symfony", level: 75 },
      { name: "Node.js", level: 80 },
      { name: "ExpressJS", level: 80 },
      { name: "Spring Boot", level: 75 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-primary via-secondary to-accent",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "MongoDB", level: 75 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "from-secondary to-primary",
    skills: [
      { name: "Git", level: 85 },
      { name: "Jira", level: 80 },
      { name: "Postman", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Photoshop", level: 70 },
      { name: "LucidChart", level: 75 },
    ],
  },
    {
    title: "Design",
    icon: Wrench,
    color: "from-secondary to-primary",
    skills: [
      { name: "Figma", level: 75 },
      { name: "Photoshop", level: 70 },
    ],
  },
]

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 gradient-animated" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-primary">Compétences</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un arsenal complet de technologies modernes pour créer des expériences web exceptionnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="p-6 backdrop-blur-sm bg-card/50 border-2 border-primary/20 hover:border-primary/50 transition-all h-full hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden">
                  {/* Animated gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className={`w-10 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                      >
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                    </div>

                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                          className="group/skill"
                        >
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground group-hover/skill:text-primary transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-sm font-semibold text-primary">{skill.level}%</span>
                          </div>
                          <div className="h-2.5 bg-muted rounded-full overflow-hidden shadow-inner">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{
                                duration: 1.2,
                                delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                                ease: "easeOut",
                              }}
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                            >
                              <div className="absolute inset-0 bg-white/20 animate-shimmer" />
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
