"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SkillShare Platform",
    description:
      "Plateforme collaborative d'apprentissage entre étudiants permettant de partager des compétences via des sessions interactives en temps réel.",
    image: "/collaborative-learning-platform-interface.jpg",
    technologies: ["Laravel", "MySQL", "JavaScript", "Bootstrap"],
    features: [
      "Système de matching skills",
      "Sessions vidéo interactives",
      "Gamification et badges",
      "Dashboard analytics",
    ],
    github: "#",
    demo: "#",
    color: "from-primary to-secondary",
  },
  {
    title: "Eventbrite Clone",
    description:
      "Application complète de création, gestion et réservation d'événements avec système de paiement intégré et validation par QR Code.",
    image: "/event-management-platform-dashboard.jpg",
    technologies: ["Laravel", "PostgreSQL", "JavaScript", "Bootstrap"],
    features: [
      "Création d'événements multi-formats",
      "Système de ticketing",
      "Paiement en ligne",
      "QR Code validation",
      "Tableau de bord organisateur",
    ],
    github: "#",
    demo: "#",
    color: "from-secondary to-accent",
  },
  {
    title: "Youdemy",
    description:
      "Plateforme de cours en ligne complète avec gestion des utilisateurs, des cours, et système d'apprentissage interactif.",
    image: "/240_F_568832212_FtDq77pFAMfZlhmdEANHD9tFm5EavynE.jpg",
    technologies: ["PHP", "SQL", "OOP"],
    features: [
      "Gestion des cours et modules",
      "Système d'inscription utilisateurs",
      "Suivi de progression",
      "Interface intuitive",
    ],
    github: "#",
    demo: "#",
    color: "from-accent to-primary",
  },
  {
    title: "Champions - Site de Football",
    description:
      "Plateforme pour organiser et gérer les groupes de joueurs dans un championnat de football avec système de classement.",
    image: "/uefa-champions-league-live-in-field-lni6zxjdt0h9a0pf.webp",
    technologies: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
    features: ["Organisation des équipes", "Gestion des matchs", "Classement automatique", "Statistiques des joueurs"],
    github: "#",
    demo: "#",
    color: "from-primary via-secondary to-accent",
  },
  // {
  //   title: "Site de Réservation",
  //   description:
  //     "Application de réservation interactive avec processus guidé en plusieurs étapes, de l'initiation à la confirmation des tickets.",
  //   image: "/booking-system-interface.jpg",
  //   technologies: ["CSS", "JavaScript","Bootstrap"],
  //   features: [
  //     "Processus de réservation guidé",
  //     "Validation en temps réel",
  //     "Confirmation par email",
  //     "Interface responsive",
  //   ],
  //   github: "#",
  //   demo: "#",
  //   color: "from-secondary to-primary",
  // },
  {
    title: "tasks",
    description:
      "Application de gestion de tâches moderne et intuitive avec interface réactive et fonctionnalités avancées de productivité.",
    image: "/female-presenting-todo-list-illustration-svg-download-png-8015924.webp",
    technologies: ["React", "next.js", "TypeScript", "Tailwind CSS"],
    features: ["Ajout/suppression de tâches", "Filtres et catégories", "Persistance des données", "Interface moderne"],
    github: "https://github.com/Meriem003/to-do",
    demo: "https://to-do-self-rho.vercel.app/dashboard",
    color: "from-accent to-secondary",
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5 gradient-animated" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-primary">Projets</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Découvrez mes réalisations qui allient innovation technique et créativité
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="overflow-hidden backdrop-blur-sm bg-card/50 border-2 border-primary/20 hover:border-primary/50 transition-all h-full hover:shadow-2xl hover:shadow-primary/20">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.4 }}
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-90 flex items-center justify-center gap-3`}
                  >
                    <Button size="sm" variant="secondary" className="rounded-full shadow-xl" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      className="rounded-full bg-white text-primary hover:bg-white/90 shadow-xl"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      scale: hoveredIndex === index ? 1 : 0,
                    }}
                    className="absolute top-3 right-3"
                  >
                    <div className="bg-white/90 rounded-full p-2 shadow-lg">
                      <Sparkles className="w-4 h-4 text-primary" />
                    </div>
                  </motion.div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs border-primary/30 hover:border-primary/60 hover:scale-105 transition-all cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1.5">
                    <p className="text-xs font-semibold text-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      Fonctionnalités clés
                    </p>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                          className="text-xs text-muted-foreground flex items-start gap-1.5"
                        >
                          <span className="text-primary mt-0.5 font-bold text-xs">✓</span>
                          <span className="line-clamp-1">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
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
