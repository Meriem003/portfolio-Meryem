"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    company: "WEBCINQ",
    role: "Développeur Full Stack Stagiaire",
    period: "Mai 2025 – Juillet 2025",
    methodology: "Méthodologie Scrum",
    projects: [
      {
        title: "Application de gestion de plomberie",
        description: "Conception et développement full stack d'une application complète",
        stack: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
        features: ["Gestion complète des services", "Suivi des interventions", "Dashboard analytique"],
      },
      {
        title: "Site humanitaire et éducatif",
        description: "Interface responsive et accessible avec focus sur l'expérience utilisateur",
        stack: ["JavaScript", "HTML", "CSS", "Bootstrap"],
        features: ["Design responsive", "Accessibilité WCAG", "Performance optimisée"],
      },
      {
        title: "Backend Store de Tapis",
        description: "Architecture backend robuste pour e-commerce",
        stack: ["Laravel", "MySQL"],
        features: ["Gestion produits", "Système de commandes", "Gestion inventaire"],
      },
    ],
  },
]

export default function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative">
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/5 blur-3xl"
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/5 blur-3xl"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <Sparkles className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="text-primary">Expérience</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-8 backdrop-blur-sm bg-card/50 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                        <p className="text-lg text-primary">{exp.role}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 mt-4 md:mt-0">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {exp.methodology}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-6">
                  {exp.projects.map((project, projectIndex) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.2 + projectIndex * 0.1 }}
                      className="pl-6 border-l-2 border-primary/30 hover:border-primary transition-colors"
                    >
                      <h4 className="text-xl font-semibold text-foreground mb-2">{project.title}</h4>
                      <p className="text-muted-foreground mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.stack.map((tech) => (
                          <Badge key={tech} variant="outline" className="border-primary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ul className="space-y-1">
                        {project.features.map((feature) => (
                          <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
