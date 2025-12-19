"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Mail, Phone, Download, Sparkles, Code2, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Particles from "@/components/particles"
import TypewriterEffect from "@/components/typewriter-effect"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Particles />

      {/* Gradient backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 20% 50%, rgba(139, 127, 214, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(253, 186, 116, 0.15) 0%, transparent 50%)"
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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="text-center lg:text-left order-2 lg:order-1"
            >
              {/* Logo Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 className="w-4 h-4 text-primary" />
                </motion.div>
                <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
                <Zap className="w-4 h-4 text-accent" />
              </motion.div>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                <span className="text-foreground">Bonjour, je suis</span>
                <br />
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Meryem Salhi
                </span>
              </motion.h1>

              {/* Typewriter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl mb-6 text-muted-foreground min-h-[60px] flex items-center justify-center lg:justify-start"
              >
                <TypewriterEffect
                  texts={["Développeuse Full Stack 💻", "Spécialiste Java & Laravel ☕", "Passionnée par React & Angular ⚛️", "Créatrice d'expériences web 🎨"]}
                />
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Transformant des idées créatives en applications web performantes et élégantes. 
                Spécialisée dans le développement full stack avec une passion pour le design et l'innovation.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-10"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="rounded-full px-8 bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
                    asChild
                  >
                    <a href="#projects" className="flex items-center gap-2">
                      <span className="relative z-10 font-semibold">Voir mes projets</span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowDown className="w-4 h-4 rotate-[-90deg]" />
                      </motion.div>
                    </a>
                  </Button>
                </motion.div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full px-8 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary transition-all backdrop-blur-sm"
                    asChild
                  >
                    <a href="/CV_Meryem_salhi.pdf" download="Meryem_Salhi_CV.pdf" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      <span className="font-semibold">Télécharger CV</span>
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Contact Info & Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="space-y-4"
              >
                {/* Contact Info */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm">
                  <motion.a
                    href="mailto:meryemsalhi590@gmail.com"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:text-primary transition-all border border-primary/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="hidden sm:inline font-medium">meryemsalhi590@gmail.com</span>
                    <span className="sm:hidden font-medium">Email</span>
                  </motion.a>
                  <motion.a
                    href="tel:+212705154111"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm hover:bg-secondary/10 hover:text-secondary transition-all border border-secondary/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">+212 7 05 15 41 11</span>
                  </motion.a>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <motion.a
                    href="https://www.linkedin.com/in/meryem-salhi-73251b33a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 hover:from-primary hover:to-primary/90 border border-primary/20 hover:border-primary flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:shadow-primary/30 group backdrop-blur-sm"
                  >
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/Meriem003"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 hover:from-secondary hover:to-secondary/90 border border-secondary/20 hover:border-secondary flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:shadow-secondary/30 group backdrop-blur-sm"
                  >
                    <Github className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                  </motion.a>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent/10 hover:from-accent hover:to-accent/90 border border-accent/20 hover:border-accent flex items-center justify-center transition-all shadow-lg hover:shadow-xl hover:shadow-accent/30 group backdrop-blur-sm"
                  >
                    <Mail className="w-5 h-5 text-accent group-hover:text-white transition-colors" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Profile Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, type: "spring", delay: 0.3 }}
              className="order-1 lg:order-2 flex justify-center"
            >
              <div className="relative">
                {/* Animated rings */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                >
                  <Sparkles className="absolute -top-4 -right-4 w-8 h-8 text-primary" />
                  <Sparkles className="absolute -bottom-4 -left-4 w-8 h-8 text-secondary" />
                  <Sparkles className="absolute top-1/2 -right-6 w-6 h-6 text-accent" />
                  <Sparkles className="absolute top-1/4 -left-6 w-5 h-5 text-primary" />
                </motion.div>

                {/* Gradient border animation */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-accent p-1 blur-sm"
                />
                
                {/* Image container with gradient border */}
                <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1.5 shadow-2xl"
                    animate={{
                      boxShadow: [
                        "0 0 20px rgba(139, 127, 214, 0.3)",
                        "0 0 40px rgba(253, 186, 116, 0.4)",
                        "0 0 20px rgba(139, 127, 214, 0.3)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="w-full h-full rounded-full bg-background p-2 overflow-hidden">
                      <div className="relative w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
                        <Image
                          src="/meryamsalhi.png"
                          alt="Meryem Salhi - Full Stack Developer"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <Code2 className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent shadow-xl flex items-center justify-center backdrop-blur-sm"
                  >
                    <Zap className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
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
