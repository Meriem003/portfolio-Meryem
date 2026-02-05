"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Github, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "SupplyChainX",
    description:
      "Application complète de gestion de chaîne d'approvisionnement avec authentification JWT sécurisée, observabilité ELK Stack et CI/CD automatisé.",
    image: "/SupplyChainX.webp",
    technologies: ["Java 17", "Spring Boot 3.5", "Angular 21", "MySQL", "Docker", "ELK Stack","JUnit 5", "Mockito","GitHub Actions","TypeScript"],
    features: [
      "Authentification JWT (Access + Refresh Token)",
      "24 tests d'intégration sécurité",
      "Observabilité avec ELK Stack",
      "CI/CD GitHub Actions",
    ],
    github: "https://github.com/Meriem003/SupplyChainX-frontend-",
    demo: "#",
    color: "from-primary to-secondary",
  },
  {
    title: "Fleet & Maintenance Module",
    description:
      "Module de gestion de flotte et maintenance avec API Laravel Sanctum et interface React moderne avec animations Framer Motion.",
    image: "/Fleet & Maintenance Module.webp",
    technologies: ["PHP 8.1","Laravel 12", "React 19", "Laravel Sanctum", "Tailwind CSS", "MySQL"],
    features: [
      "Gestion de flotte véhicules",
      "Suivi de maintenance",
      "Animations fluides",
      "Notifications temps réel",
    ],
    github: "https://github.com/Meriem003/Fleet_Maintenance_module",
    demo: "#",
    color: "from-secondary to-accent",
  },
  {
    title: "SkillShare Platform",
    description:
      "Plateforme collaborative d'apprentissage entre étudiants avec système d'authentification Laravel Sanctum et visualisation de données Chart.js.",
    image: "/collaborative-learning-platform-interface.jpg",
    technologies: ["Laravel 10", "PHP 8.1", "Chart.js", "MySQL", "PHPUnit", "HTML", "CSS", "JavaScript"],
    features: [
      "Système de matching skills",
      "Dashboard analytics graphiques",
      "Tests PHPUnit",
      "API RESTful sécurisée",
    ],
    github: "https://github.com/Meriem003/skill_share",
    demo: "#",
    color: "from-accent to-primary",
  },
  {
    title: "SmartShop",
    description:
      "Application e-commerce backend robuste avec Spring Boot, mapping automatique MapStruct et documentation Swagger/OpenAPI.",
    image: "/SmartShop.webp",
    technologies: ["Java 17", "Spring Boot 3.2", "Spring Data JPA","Maven","MapStruct", "JUnit 5", "MySQL", "Swagger", "react"],
    features: [
      "Architecture RESTful",
      "Mapping DTO ↔ Entity automatique",
      "Tests unitaires complets",
      "Documentation OpenAPI",
    ],
    github: "https://github.com/Meriem003/smart_shop/tree/develop",
    demo: "#",
    color: "from-primary via-secondary to-accent",
  },
  {
    title: "Hôpital Numérique",
    description:
      "Système de gestion hospitalière numérique avec Spring Boot, validation des données et tests Mockito.",
    image: "/Hôpital Numérique.webp",
    technologies: ["Java 21", "Jakarta EE", "JPA", "Maven","Hibernate", "MySQL","HTML", "CSS", "JavaScript"],
    features: [
      "Gestion des patients",
      "Planification des rendez-vous",
      "Validation des données",
      "Tests Mockito",
    ],
    github: "https://github.com/Meriem003/Hopital_numerique",
    demo: "#",
    color: "from-secondary to-primary",
  },
  {
    title: "CineHub",
    description:
      "Application de gestion de cinéma avec Spring Framework MVC, Hibernate ORM et déploiement sur Apache Tomcat.",
    image: "/CineHub.webp",
    technologies: ["Java", "Spring 5.3", "Hibernate", "Maven", "MySQL", "Tomcat"],
    features: [
      "Catalogue de films",
      "Réservation de séances",
      "Gestion des salles",
      "Architecture MVC",
    ],
    github: "https://github.com/Meriem003/CineHub",
    demo: "#",
    color: "from-accent to-secondary",
  },
  {
    title: "Todo App",
    description:
      "Application de gestion de tâches moderne avec Next.js 14 App Router, TypeScript et composants shadcn/ui.",
    image: "/female-presenting-todo-list-illustration-svg-download-png-8015924.webp",
    technologies: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    features: [
      "App Router Next.js",
      "Composants réutilisables",
      "Interface responsive",
      "Typage TypeScript",
    ],
    github: "https://github.com/Meriem003/to-do",
    demo: "https://to-do-self-rho.vercel.app/dashboard",
    color: "from-primary to-accent",
  },
  {
    title: "Luxe Beauty",
    description:
      "Boutique de maquillage premium avec Next.js 14, React 18 et design moderne responsive.",
    image: "/Luxe-Beauty.webp",
    technologies: ["Next.js 14", "React 18", "TypeScript", "Tailwind CSS"],
    features: [
      "Catalogue produits premium",
      "Interface élégante",
      "App Router optimisé",
      "Design responsive",
    ],
    github: "https://github.com/Meriem003/makeup",
    demo: "#",
    color: "from-secondary via-accent to-primary",
  },
]

const PROJECTS_PER_PAGE = 6

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE)
  const startIndex = currentPage * PROJECTS_PER_PAGE
  const currentProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE)

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages)
  }

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 25% 50%, rgba(253, 186, 116, 0.12) 0%, transparent 50%), radial-gradient(circle at 75% 50%, rgba(139, 127, 214, 0.12) 0%, transparent 50%)"
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
            initial={{ scale: 0, rotate: 180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary blur-md opacity-50"
              />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">Projets</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full shadow-lg"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Découvrez mes réalisations qui allient innovation technique et créativité
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentProjects.map((project, index) => (
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

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 mt-12"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={prevPage}
              className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "bg-gradient-to-r from-primary to-accent scale-125"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextPage}
              className="rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>

            <span className="text-sm text-muted-foreground ml-4">
              {currentPage + 1} / {totalPages}
            </span>
          </motion.div>
        )}
      </div>
    </section>
  )
}
