"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import Particles from "@/components/particles"
import TypewriterEffect from "@/components/typewriter-effect"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 gradient-animated" />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="mb-8 inline-block relative"
          >
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              className="absolute inset-0 rounded-full"
            >
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-primary" />
              <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-secondary" />
              <Sparkles className="absolute top-1/2 -right-4 w-4 h-4 text-accent" />
            </motion.div>
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-5xl font-bold text-primary">
                MS
              </div>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-balance"
          >
            {["M", "e", "r", "y", "e", "m"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="inline-block text-foreground"
              >
                {letter}
              </motion.span>
            ))}{" "}
            {["S", "a", "l", "h", "i"].map((letter, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.05 }}
                className="inline-block text-primary"
              >
                {letter}
              </motion.span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl mb-8 text-muted-foreground min-h-[80px]"
          >
            <TypewriterEffect
              texts={["Développeuse Full Stack", "Creative Developer", "React Enthusiast", "Code Artist"]}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Passionnée par la création d'expériences web innovantes qui allient technique et créativité. Transformons le
            code en art visuel ensemble!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all relative overflow-hidden group"
                asChild
              >
                <a href="#projects">
                  <span className="relative z-10">Voir mes projets</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                asChild
              >
                <a href="#contact">Me contacter</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <motion.a
              href="mailto:meryemsalhi590@gmail.com"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">meryemsalhi590@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+212705154111"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>+212 7 05 15 41 11</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <motion.a
              href="https://www.linkedin.com/in/meryem-salhi-73251b33a/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shadow-lg relative group"
            >
              <Linkedin className="w-5 h-5 relative z-10" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>
            <motion.a
              href="https://github.com/Meriem003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 rounded-full bg-card hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shadow-lg relative group"
            >
              <Github className="w-5 h-5 relative z-10" />
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity"
                initial={false}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="relative"
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-primary/20"
            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          />
          <ArrowDown className="w-8 h-8 text-primary relative z-10" />
        </motion.div>
      </motion.a>
    </section>
  )
}
