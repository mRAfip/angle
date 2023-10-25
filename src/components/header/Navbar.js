import React, { useState } from 'react';
import './navbar.css';

import Logo from '../images/logo.png'

function Header() {


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <div className="navbar-left">
          <a class="navbar-brand" href="#"><img src={Logo} alt="Bootstrap" width="auto" height="22"/></a>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${isMenuOpen ? 'change' : ''}`}></div>
        </div>
      </nav>
      <div className="overlay" onClick={toggleMenu}></div>

      <div className='hero'>
        
        <h4 className='hero_head'>find your <br/>perfect domain</h4>
        <p className='hero_para'>Find .com domains starting at ₹99/year. Free WHOIS Privacy, SSL, and Premium DNS included. Host with us, or any provider of your choice.</p>
        

        <div className='domain_price'>
          <p className='domain_para'><span className='domain-extension'>.com</span>₹999</p>
          <p className='domain_para'><span className='domain-extension'>.in</span>₹999</p>
          <p className='domain_para'><span className='domain-extension'>.org</span>₹999</p>
          <p className='domain_para'><span className='domain-extension'>.io</span>₹999</p>
          <p className='domain_para'><span className='domain-extension'>.ai</span>₹999</p>

        </div>


        <div className="search-container">
          <input type="text" className="search-input" placeholder="Search domain you want" />
          <button className="search-button">Search Domain</button>
        </div>

      </div>
    </header>
  )
}

export default Header
