'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import './about.scss'
import AboutImage from '../../../public/photo_3_2023-10-06_12-20-09.jpg'
import { FaDownload, FaCode, FaPalette, FaMobile } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si'

const About = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    try {
      const response = await fetch('/api/download-cv')
      if (!response.ok) throw new Error('Failed to download CV')
      
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Ahmadjon_Karimov_CV.pdf'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('CV download error:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const tools = [
    'Git & GitHub',
    'VS Code',
    'Figma',
    'npm/yarn',
    'Webpack',
    'Terminal'
  ]

  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' }
  ]

  const specializations = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and performant web applications with modern technologies.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Implementation',
      description: 'Transforming designs into pixel-perfect, accessible interfaces.'
    },
    {
      icon: <FaMobile />,
      title: 'Responsive Design',
      description: 'Creating seamless experiences across all devices and screen sizes.'
    }
  ]

  return (
    <section className='about' id='about'>
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Frontend Developer based in Tashkent, Uzbekistan 📍
          </p>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="image-wrapper">
              <Image 
                src={AboutImage} 
                alt="Ahmadjon Karimov - Front-end Developer" 
                className='about-image'
                priority
              />
              <div className="tech-stack-icons">
                <SiNextdotjs className="tech-icon nextjs" />
                <SiTypescript className="tech-icon typescript" />
                <SiTailwindcss className="tech-icon tailwind" />
              </div>
            </div>
            <button 
              className={`download-cv-btn ${isDownloading ? 'downloading' : ''}`}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <FaDownload />
              <span>{isDownloading ? 'Downloading...' : 'Download CV'}</span>
            </button>
          </div>

          <div className="about-details">
            <div className="about-text">
              <p>
                As a passionate Frontend Developer, I specialize in creating engaging and responsive web experiences. 
                My approach combines clean code practices with modern design principles to build applications that users love.
              </p>
            </div>

            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <h3>{stat.number}</h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="specializations-grid">
              {specializations.map((spec, index) => (
                <div key={index} className="specialization-card">
                  <div className="icon">{spec.icon}</div>
                  <h4>{spec.title}</h4>
                  <p>{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="tools-section">
        <h3 className="tools-title">Tools & Technologies</h3>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-item">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
