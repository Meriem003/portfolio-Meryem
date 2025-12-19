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
    <section id="experience" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-primary/5 to-secondary/5" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 40% 50%, rgba(139, 127, 214, 0.1) 0%, transparent 50%), radial-gradient(circle at 60% 50%, rgba(253, 186, 116, 0.1) 0%, transparent 50%)"
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
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
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary via-accent to-primary blur-md opacity-50"
              />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-xl">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mon <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">Expérience</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-secondary via-accent to-primary mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="relative"
            >
              <Card className="p-8 md:p-10 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 relative overflow-hidden group rounded-3xl">
                {/* Animated gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-30 animate-pulse" />
                  <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="relative z-10">
                  {/* Header with company info */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8 gap-4">
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="flex-shrink-0"
                      >
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary via-accent to-primary flex items-center justify-center shadow-xl relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                          <Briefcase className="w-8 h-8 text-white relative z-10" />
                        </div>
                      </motion.div>
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mb-2">
                          {exp.company}
                        </h3>
                        <p className="text-lg md:text-xl font-semibold text-foreground mb-2">{exp.role}</p>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="w-4 h-4 text-secondary" />
                          <span className="text-sm font-medium">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="mt-2 md:mt-0"
                    >
                      <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30 hover:from-secondary/30 hover:to-accent/30 transition-all">
                        {exp.methodology}
                      </Badge>
                    </motion.div>
                  </div>

                  {/* Projects grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {exp.projects.map((project, projectIndex) => (
                      <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.2 + projectIndex * 0.1,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group/project"
                      >
                        <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-card/60 to-card/30 border border-secondary/20 hover:border-accent/40 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-accent/10">
                          <div className="flex items-start gap-3 mb-4">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent mt-2 flex-shrink-0" />
                            <h4 className="text-lg font-bold text-foreground group-hover/project:text-secondary transition-colors leading-tight">
                              {project.title}
                            </h4>
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                            {project.description}
                          </p>
                          
                          {/* Tech stack */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.stack.map((tech) => (
                              <motion.div
                                key={tech}
                                whileHover={{ scale: 1.1, y: -2 }}
                              >
                                <Badge 
                                  variant="outline" 
                                  className="text-xs border-secondary/30 bg-secondary/5 hover:bg-secondary/10 hover:border-secondary/50 transition-all"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Features */}
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <motion.li 
                                key={feature} 
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: index * 0.2 + projectIndex * 0.1 + idx * 0.05 }}
                                className="text-xs text-muted-foreground flex items-start gap-2"
                              >
                                <Sparkles className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
