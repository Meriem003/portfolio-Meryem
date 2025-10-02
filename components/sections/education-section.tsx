"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const education = [
  {
    institution: "YouCode | UM6P",
    degree: "Développement Full Stack",
    period: "2024 - Présent",
    description:
      "Formation intensive en développement web full stack avec focus sur les technologies modernes et les méthodologies agiles.",
    icon: GraduationCap,
    color: "from-primary to-secondary",
  },
  {
    institution: "Université Mohamed Premier",
    degree: "Licence Sciences Économiques",
    period: "2022 - 2024",
    description:
      "Formation en sciences économiques avec développement de compétences analytiques et de résolution de problèmes.",
    icon: GraduationCap,
    color: "from-secondary to-accent",
  },
  {
    institution: "Lycée Khawarizmi",
    degree: "Baccalauréat SVT",
    period: "2022",
    description: "Diplôme du baccalauréat en Sciences de la Vie et de la Terre.",
    icon: GraduationCap,
    color: "from-accent to-primary",
  },
]

const certifications = [
  {
    title: "Website Creation Workshop",
    issuer: "HULT PRIZE FOUNDATION",
    location: "Faculté des Sciences Semlalia, Marrakech",
    icon: Award,
  },
]

const languages = [
  { name: "Arabe", level: "Natif", percentage: 100 },
  { name: "Français", level: "B1", percentage: 70 },
  { name: "Anglais", level: "A2", percentage: 50 },
]

const softSkills = ["Esprit d'analyse", "Travail d'équipe", "Adaptabilité", "Créativité", "Problem Solving"]

export default function EducationSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="education" ref={ref} className="py-20 md:py-32 relative">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
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
            initial={{ rotate: -180, scale: 0 }}
            animate={isInView ? { rotate: 0, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-block mb-4"
          >
            <GraduationCap className="w-12 h-12 text-primary mx-auto" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Formation & <span className="text-primary">Compétences</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-primary" />
              Parcours Académique
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                >
                  <Card className="p-6 backdrop-blur-sm bg-card/50 border-2 border-primary/20 hover:border-primary/40 transition-all hover:shadow-2xl">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${edu.color} flex items-center justify-center flex-shrink-0`}
                      >
                        <edu.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <h4 className="text-xl font-bold text-foreground">{edu.institution}</h4>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                          </div>
                        </div>
                        <p className="text-lg text-primary mb-2">{edu.degree}</p>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Award className="w-12 h-12 text-primary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card
                  key={cert.title}
                  className="p-6 backdrop-blur-sm bg-card/50 border-2 border-primary/20 hover:border-primary/40 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{cert.title}</h4>
                      <p className="text-primary text-sm mb-1">{cert.issuer}</p>
                      <p className="text-muted-foreground text-sm">{cert.location}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Languages & Soft Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-2 border-primary/20 h-full">
                <h3 className="text-xl font-bold text-foreground mb-6">Langues</h3>
                <div className="space-y-4">
                  {languages.map((lang, index) => (
                    <div key={lang.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-foreground font-medium">{lang.name}</span>
                        <Badge variant="secondary">{lang.level}</Badge>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${lang.percentage}%` } : {}}
                          transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 backdrop-blur-sm bg-card/50 border-2 border-primary/20 h-full">
                <h3 className="text-xl font-bold text-foreground mb-6">Soft Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm border-2 border-primary/30 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
