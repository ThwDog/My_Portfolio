import './NavBar.css';
import React, { useEffect, useState ,useRef } from 'react';

export default function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    
      useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    
        const handleScroll = () => {
          const scrollPosition = window.scrollY || document.documentElement.scrollTop;
          setIsScrolled(scrollPosition > 0);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
      };
      }, []);

    return (
        <>
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#/AboutMe" onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>About me</a></li>
              <li><a href="#/MyWork" onClick={() => myWorkRef.current.scrollIntoView({ behavior: 'smooth' })}>My work</a></li>
              <li><a href="#/Contract" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</a></li>
            </ul>
        </nav>
        </>
    );
}
