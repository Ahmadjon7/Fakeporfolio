'use client'

import React, { useEffect, useState } from 'react';
import './CursorEffect.scss';

const CursorEffect = () => {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const updateCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const updateCursorStyle = () => {
      const element = document.elementFromPoint(position.x, position.y);
      const isClickable = element?.matches('a, button, [role="button"], input, textarea, select') || false;
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    window.addEventListener('mousemove', updateCursor);
    window.addEventListener('mousemove', updateCursorStyle);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
      window.removeEventListener('mousemove', updateCursorStyle);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [position.x, position.y]);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`cursor-dot ${isPointer ? 'cursor-pointer' : ''} ${isHidden ? 'cursor-hidden' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
      <div
        className={`cursor-ring ${isPointer ? 'cursor-pointer' : ''} ${isHidden ? 'cursor-hidden' : ''}`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      />
    </>
  );
};

export default CursorEffect; 