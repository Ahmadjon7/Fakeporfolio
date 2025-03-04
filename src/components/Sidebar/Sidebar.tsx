'use client'

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoClose } from 'react-icons/io5';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { BiCodeAlt } from 'react-icons/bi';
import { RiContactsLine } from 'react-icons/ri';
import './Sidebar.scss';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const menuItems = [
    { href: '#home', label: 'Home', icon: <AiOutlineHome /> },
    { href: '#about', label: 'About', icon: <AiOutlineUser /> },
    { href: '#skills', label: 'Skills', icon: <BiCodeAlt /> },
    { href: '#projects', label: 'Projects', icon: <AiOutlineProject /> },
    { href: '#contact', label: 'Contact', icon: <RiContactsLine /> },
  ];

  const handleLinkClick = () => {
    // Add a small delay before closing to make the animation smoother
    setTimeout(onClose, 150);
  };

  return (
    <>
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
        aria-hidden="true"
      />
      <aside 
        ref={sidebarRef}
        className={`sidebar ${isOpen ? 'active' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="sidebar-header">
          <h2 className="sidebar-title">Ahmadjon.dev</h2>
          <button 
            className="close-button" 
            onClick={onClose} 
            aria-label="Close menu"
          >
            <IoClose />
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href} 
              onClick={handleLinkClick}
              className="nav-link"
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <p className="footer-text">
            Let&apos;s build something amazing together
          </p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar; 