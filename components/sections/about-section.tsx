"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Sparkles, Rocket, Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

const stats = [
  { icon: Code2, label: "Années d'études", value: "2+" },
  { icon: Sparkles, label: "Projets réalisés", value: "10+" },
  { icon: Rocket, label: "Technologies", value: "15+" },
  { icon: Heart, label: "Passion", value: "100%" },
]

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative overflow-hidden">
      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-primary/5" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(253, 186, 116, 0.1) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(139, 127, 214, 0.1) 0%, transparent 50%)"
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
            initial={{ scale: 0, rotate: -180 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center mb-6"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent blur-md opacity-50"
              />
              <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-xl">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            À Propos de <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Moi</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full shadow-lg"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <Card className="p-8 backdrop-blur-xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden group rounded-2xl">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                initial={false}
              />
              {/* Floating particles effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse" />
                <div className="absolute bottom-10 left-10 w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full blur-2xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
              </div>

              <div className="space-y-6 leading-relaxed text-lg relative z-10">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-foreground"
                >
                  Bonjour! Je suis <span className="text-primary font-semibold">Meryem Salhi</span>, étudiante en 2ème
                  année à <span className="text-secondary font-semibold">UM6P YouCode</span>, spécialisée en
                  développement full stack.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 }}
                  className="text-muted-foreground"
                >
                  Passionnée par la création d'expériences web innovantes, j'allie technique et créativité pour donner
                  vie à des projets qui repoussent les limites du web moderne.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground"
                >
                  Mes compétences couvrent un large éventail de technologies, de{" "}
                  <span className="text-primary">Laravel</span> et <span className="text-secondary">PHP</span> côté
                  backend, à <span className="text-accent">React</span> et <span className="text-primary">Angular</span>{" "}
                  côté frontend.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                  className="text-foreground font-medium"
                >
                  Je suis constamment à la recherche de projets stimulants qui me permettent d'apprendre et de créer des
                  solutions innovantes!
                </motion.p>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
              >
                <Card className="p-6 text-center backdrop-blur-sm bg-card/50 border-2 border-primary/20 hover:border-primary/40 hover:scale-105 transition-all group hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />

                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary/50 relative z-10"
                  >
                    <stat.icon className="w-8 h-8 text-primary-foreground" />
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform relative z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-sm text-muted-foreground relative z-10">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
