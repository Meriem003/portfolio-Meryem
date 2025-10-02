import type React from "react"
import type { Metadata } from "next"
import { Quicksand, Fira_Code } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Meryem Salhi | Creative Full Stack Developer",
  description:
    "Portfolio de Meryem Salhi - Développeuse Full Stack passionnée par la création d'expériences web innovantes. Spécialisée en Laravel, React, Angular.",
  keywords: ["Full Stack Developer", "Laravel", "React", "Angular", "Web Development", "Meryem Salhi"],
  authors: [{ name: "Meryem Salhi" }],
  openGraph: {
    title: "Meryem Salhi | Creative Full Stack Developer",
    description: "Portfolio de Meryem Salhi - Développeuse Full Stack créative",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${quicksand.variable} ${firaCode.variable}`} suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
