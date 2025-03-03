'use client'

import React, { useState } from 'react'
import './projects.scss'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  live: string
  category: string
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Project 1",
    description: "Description of project 1. Add your actual project description here.",
    image: "/images/projects/project1.jpg",
    technologies: ["React", "Next.js", "TypeScript"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1-demo.com",
    category: "frontend"
  },
  // Add more projects here
]

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const categories = ['all', 'frontend', 'fullstack', 'mobile']

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

  return (
    <section id='projects' className='projects'>
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">Here are some of my recent works</p>
        
        <div className="filter-buttons">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${filter === category ? 'active' : ''}`}
              onClick={() => setFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  priority={project.id === 1}
                  className="project-img"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <Link href={project.github} target="_blank" aria-label="View source code on GitHub">
                    <FiGithub />
                  </Link>
                  <Link href={project.live} target="_blank" aria-label="View live project">
                    <FaExternalLinkAlt />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
