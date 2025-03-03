import React from 'react'
import './Footer.scss'
import Link from 'next/link';
import { TbBrandLinkedin, TbBrandTelegram } from 'react-icons/tb';
import { FiGithub, FiMail, FiMapPin } from 'react-icons/fi';
import { FaHeart, FaCode } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiJavascript,
  SiSass 
} from 'react-icons/si';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-info">
              <h3>Ahmadjon.dev</h3>
              <p>Building digital experiences with modern web technologies</p>
              <div className="tech-stack">
                <div className="tech-icon-wrapper" data-tooltip="React">
                  <SiReact className="tech-icon react" />
                </div>
                <div className="tech-icon-wrapper" data-tooltip="Next.js">
                  <SiNextdotjs className="tech-icon nextjs" />
                </div>
                <div className="tech-icon-wrapper" data-tooltip="TypeScript">
                  <SiTypescript className="tech-icon typescript" />
                </div>
                <div className="tech-icon-wrapper" data-tooltip="JavaScript">
                  <SiJavascript className="tech-icon javascript" />
                </div>
                <div className="tech-icon-wrapper" data-tooltip="Tailwind CSS">
                  <SiTailwindcss className="tech-icon tailwind" />
                </div>
                <div className="tech-icon-wrapper" data-tooltip="Sass">
                  <SiSass className="tech-icon sass" />
                </div>
              </div>
            </div>
            
            <div className="footer-links-section">
              <div className="footer-links-group">
                <h4>Navigation</h4>
                <nav>
                  <Link href="#home">Home</Link>
                  <Link href="#about">About</Link>
                  <Link href="#projects">Projects</Link>
                  <Link href="#contact">Contact</Link>
                </nav>
              </div>

              <div className="footer-links-group">
                <h4>Connect</h4>
                <nav>
                  <Link href="https://www.linkedin.com/in/ahmadjon-karimov-b2409625a/" target="_blank" aria-label="LinkedIn Profile">
                    <TbBrandLinkedin /> LinkedIn
                  </Link>
                  <Link href="https://github.com/Ahmadjon7" target="_blank" aria-label="GitHub Profile">
                    <FiGithub /> GitHub
                  </Link>
                  <Link href="https://t.me/karimovahmadjon" target="_blank" aria-label="Telegram Profile">
                    <TbBrandTelegram /> Telegram
                  </Link>
                  <Link href="mailto:karimovahmadjon7788@gmail.com" aria-label="Email Contact">
                    <FiMail /> Email
                  </Link>
                </nav>
              </div>

              <div className="footer-links-group">
                <h4>Location</h4>
                <div className="location-info">
                  <FiMapPin />
                  <p>Tashkent, Uzbekistan</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright">
              <p>© {new Date().getFullYear()} All rights reserved</p>
            </div>
            <div className="made-with">
              <p>
                Made with <FaHeart className="heart-icon" /> and <FaCode className="code-icon" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
