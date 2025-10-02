"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative py-12 bg-card/30 backdrop-blur-sm border-t border-border overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            <motion.a
              href="https://github.com/Meriem003"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shadow-lg border border-primary/20"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/meryem-salhi-b5a2a5280/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shadow-lg border border-primary/20"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full bg-card hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-all shadow-lg border border-primary/20"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="text-muted-foreground flex items-center gap-2 justify-center">
              Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                <Heart className="w-4 h-4 text-accent fill-accent" />
              </motion.span>{" "}
              & Code by <span className="text-primary font-semibold">Meryem Salhi</span>
            </p>
            <p className="text-sm text-muted-foreground mt-2">© {new Date().getFullYear()} Tous droits réservés</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                onClick={scrollToTop}
                size="icon"
                className="rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all relative group"
              >
                <motion.div
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  <ArrowUp className="w-5 h-5" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={false}
                />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
