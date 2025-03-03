import React from "react"
import Hero from "@/components/Hero/Hero"
import './styles/globals.scss'
import About from "@/components/About/About"
import Projects from "@/components/Projects/Projects"
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact/Contact"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
