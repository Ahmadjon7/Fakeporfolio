'use client'

import React, { useState, useEffect } from 'react';
import './Header.scss';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';
import Sidebar from '@/components/Sidebar/Sidebar';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.style.overflow = !isSidebarOpen ? 'hidden' : '';
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className='header-nav'>
          <Link href='/' className='header-logo'>
            Ahmadjon.dev
          </Link>
          <button 
            className='menu-toggle'
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
            aria-expanded={isSidebarOpen}
          >
            <FaBars />
          </button>
          <ul className='header-list'>
            <li>
              <Link href='#home' className='header-link'>
                Home
              </Link>
            </li>
            <li>
              <Link href='#about' className='header-link'>
                About
              </Link>
            </li>
            <li>
              <Link href='#projects' className='header-link'>
                Projects
              </Link>
            </li>
            <li>
              <Link href='#contact' className='header-link'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
};

export default Header;
