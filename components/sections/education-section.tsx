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
  degree: "Licence Sciences Économiques (2ᵉ année)",
  period: "2023 - Présent",
  description:
    "Étudiante en deuxième année de licence en sciences économiques, avec développement de compétences analytiques et de résolution de problèmes.",
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
    <section id="education" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(139, 127, 214, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(253, 186, 116, 0.1) 0%, transparent 50%)"
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
            initial={{ rotate: -180, scale: 0 }}
            animate={isInView ? { rotate: 0, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent via-primary to-secondary blur-md opacity-50"
              />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shadow-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Formation & <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">Compétences</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-accent via-primary to-secondary mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Parcours Académique */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-primary blur-md opacity-40"
                />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Parcours Académique
              </span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.institution}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group"
                >
                  <Card className="h-full p-6 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden rounded-2xl">
                    {/* Gradient overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`}
                      initial={false}
                    />
                    
                    {/* Floating particle */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`absolute top-8 right-8 w-16 h-16 bg-gradient-to-br ${edu.color} rounded-full blur-2xl opacity-30 animate-pulse`} />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="mb-4"
                      >
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${edu.color} flex items-center justify-center shadow-lg relative overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                          <edu.icon className="w-7 h-7 text-white relative z-10" />
                        </div>
                      </motion.div>

                      {/* Period badge */}
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-4 h-4 text-accent" />
                        <span className="text-xs font-semibold text-muted-foreground bg-accent/10 px-2 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>

                      {/* Content */}
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {edu.institution}
                      </h4>
                      <p className={`text-base font-semibold mb-3 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                        {edu.degree}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {edu.description}
                      </p>
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
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-accent blur-md opacity-40"
                />
                <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Certifications
              </span>
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <Card className="h-full p-6 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden rounded-2xl group">
                    {/* Gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                      initial={false}
                    />
                    
                    {/* Floating particle */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-8 right-8 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
                    </div>

                    <div className="flex items-start gap-4 relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.6, type: "spring" }}
                        className="flex-shrink-0"
                      >
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg relative overflow-hidden">
                          <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                          <cert.icon className="w-7 h-7 text-white relative z-10" />
                        </div>
                      </motion.div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <p className="text-sm font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                          {cert.issuer}
                        </p>
                        <p className="text-sm text-muted-foreground">{cert.location}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Languages & Soft Skills */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full p-6 md:p-8 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-secondary/10 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/20 relative overflow-hidden rounded-2xl group">
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                
                {/* Floating particle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                      Langues
                    </span>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-secondary to-accent animate-pulse" />
                  </h3>
                  
                  <div className="space-y-5">
                    {languages.map((lang, index) => (
                      <motion.div 
                        key={lang.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.7 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground font-semibold">{lang.name}</span>
                          <motion.div whileHover={{ scale: 1.1 }}>
                            <Badge 
                              variant="secondary" 
                              className="font-semibold bg-gradient-to-r from-secondary/20 to-accent/20 border border-secondary/30"
                            >
                              {lang.level}
                            </Badge>
                          </motion.div>
                        </div>
                        <div className="h-3 bg-muted/50 rounded-full overflow-hidden shadow-inner backdrop-blur-sm">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${lang.percentage}%` } : {}}
                            transition={{ duration: 1.2, delay: 0.7 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="h-full bg-gradient-to-r from-secondary to-accent rounded-full relative shadow-md"
                          >
                            <motion.div 
                              className="absolute inset-0 bg-white/30 rounded-full" 
                              animate={{ x: ['-100%', '100%'] }}
                              transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 0.5 }}
                            />
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white/50 rounded-full" />
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <Card className="h-full p-6 md:p-8 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-accent/10 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/20 relative overflow-hidden rounded-2xl group">
                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  initial={false}
                />
                
                {/* Floating particle */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-10 left-10 w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full blur-2xl opacity-30 animate-pulse" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                      Soft Skills
                    </span>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-primary animate-pulse" />
                  </h3>
                  
                  <div className="flex flex-wrap gap-3">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.4, 
                          delay: 0.7 + index * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.1, y: -3 }}
                      >
                        <Badge
                          variant="outline"
                          className="px-4 py-2 text-sm font-semibold border-2 border-accent/30 bg-accent/5 hover:border-accent hover:bg-gradient-to-r hover:from-accent hover:to-primary hover:text-white transition-all duration-300 cursor-default shadow-sm"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
