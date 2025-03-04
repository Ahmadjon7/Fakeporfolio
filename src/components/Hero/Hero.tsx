'use client'

import React from 'react'
import './hero.scss'
import { FaGithub, FaLinkedinIn, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiNextdotjs } from 'react-icons/si'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
            <div className="hero-text">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Front-End React Developer <span className="wave">👋</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Hi, I&apos;m Ahmadjon Karimov. A passionate Front-end React Developer based in Tashkent, Uzbekistan 📍
            </motion.p>

            <motion.div 
              className="social-links"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
    
          <motion.div 
            className="tech-stack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>Tech Stack</p>
            <div className="tech-icons">
              <FaHtml5 className="tech-icon html" title="HTML5" />
              <FaCss3Alt className="tech-icon css" title="CSS3" />
              <SiJavascript className="tech-icon javascript" title="JavaScript" />
              <FaReact className="tech-icon react" title="React" />
              <SiNextdotjs className="tech-icon nextjs" title="Next.js" />
              <SiTypescript className="tech-icon typescript" title="TypeScript" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
