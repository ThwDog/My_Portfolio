import './NavBar.css';
import React, { useEffect, useState ,useRef } from 'react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/">Home</Link></li>
              <li><Link to="/AboutMe" onClick={() => aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })}>About me</Link></li>
              <li><Link to="/MyWork" onClick={() => myWorkRef.current.scrollIntoView({ behavior: 'smooth' })}>My work</Link></li>
              <li><Link to="/Contract" onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</Link></li>
            </ul>
        </nav>
        </>
    );
}
