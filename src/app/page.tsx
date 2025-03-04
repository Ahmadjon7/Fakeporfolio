import React from "react"
import Hero from "@/components/Hero/hero"
import './styles/globals.scss'
import About from "@/components/About/about"
import Projects from "@/components/Projects/projects"
import Skills from "@/components/Skills/Skills"
import Contact from "@/components/Contact/contact"

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
