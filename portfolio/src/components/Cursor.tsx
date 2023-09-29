'use client'
import React, { useState, useEffect, MouseEvent } from 'react';



const Cursor = () => {

    const [position , setPosition] = useState({x:0 , y:0})
    const [isPointer , setIsPointer] = useState(false)
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleMouseMove = (e: MouseEvent) => {
        setPosition((oldPosition) => ({ ...oldPosition, x: e.clientX, y: e.clientY }));
        const target = e.target as HTMLElement;
    
        setIsPointer(
            window.getComputedStyle(target).getPropertyValue("cursor") === 'pointer'
        );
    };
    
    
    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove as unknown as EventListener);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove as unknown as EventListener);
        }
    }, []);
    
    
    
    const flareSize = isPointer ? 0 :30;
    const cursorStyle = isPointer ? {left : '-100px' , top:'-100px'} : {};
  return (
    <div className={`flare ${isPointer ? "pointer" : ""}`}
        style={
            {
                ...cursorStyle,
                left:`${position.x}px`,
                top:`${position.y}px`,
                width:`${flareSize}px`,
                height:`${flareSize}px`,
            }
        }
    ></div>
  )
}

export default Cursor
