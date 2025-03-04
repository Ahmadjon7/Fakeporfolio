'use client'

import React from 'react'
import './Skills.scss'
import { motion } from 'framer-motion'

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "HTML", level: 90 },
        { name: "CSS/SCSS", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React.js", level: 85 },
        { name: "Next.js", level: 80 }
      ]
    },
    {
      category: "Tools & Others",
      items: [
        { name: "Git", level: 85 },
        { name: "Webpack", level: 75 },
        { name: "RESTful APIs", level: 80 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Design", level: 75 },
        { name: "Performance Optimization", level: 80 }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="skills" id="skills">
      <div className="container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2>My Skills</h2>
          <p>Technologies I&apos;ve been working with</p>
        </motion.div>

        <motion.div
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.category} 
              className="skill-group"
              variants={itemVariants}
            >
              <h3>{skillGroup.category}</h3>
              <div className="skills-grid">
                {skillGroup.items.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="skill-item"
                    variants={itemVariants}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div 
                        className="skill-progress"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 