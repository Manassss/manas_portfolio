import React, { useState } from 'react';
import { FaInfoCircle, FaBriefcase, FaTools, FaGraduationCap, FaBlog, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  // Styles
  const navbarStyle = {
    background: 'linear-gradient(135deg, #f4f1e1, #e8e2d7)', // Light cream and beige gradient
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    padding: '10px 0',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  };

  const navLinkStyle = {
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
    color: 'black', // Default text color
    cursor: 'pointer',
    padding: '8px 15px',
    borderRadius: '5px',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  };

  const navLinkHoverStyle = {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    color: '#ff9800',
    background: '#f8f4ec',
  };

  const navbarBrandStyle = {
    fontFamily: "'Roboto', sans-serif",
    letterSpacing: '1px',
    color: '#333',
    fontWeight: 'bold',
  };

  const iconStyle = {
    fontSize: '1.2rem',
    transition: 'transform 0.3s ease',
  };

  const iconHoverStyle = {
    transform: 'scale(1.2)',
  };

  const handleScroll = (id) => {
    // Scroll to top for 'home' section
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to other sections, but account for the navbar height
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 70, // Adjust for the fixed navbar height
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" style={navbarStyle}>
      <div className="container-fluid">
        <span
          className="navbar-brand fs-3 fw-bold text-dark"
          style={navbarBrandStyle}
          onClick={() => handleScroll('home')} // Ensure it scrolls to the top
        >
          Manas Mandlecha
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {[
              { id: 'about', label: 'About', icon: <FaInfoCircle /> },
              { id: 'projects', label: 'Projects', icon: <FaBriefcase /> },
              { id: 'skel', label: 'Skills', icon: <FaTools /> },
              { id: 'experience', label: 'Experience', icon: <FaGraduationCap /> },
              { id: 'blog', label: 'Blog', icon: <FaBlog /> },
              { id: 'contact', label: 'Contact', icon: <FaEnvelope /> },
            ].map((item) => (
              <li className="nav-item" key={item.id}>
                <span
                  className="nav-link fs-5 px-3 py-2 rounded text-dark"
                  style={hoveredLink === item.id ? { ...navLinkStyle, ...navLinkHoverStyle } : navLinkStyle}
                  onClick={() => handleScroll(item.id)}
                  onMouseEnter={() => setHoveredLink(item.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span style={hoveredLink === item.id ? { ...iconStyle, ...iconHoverStyle } : iconStyle}>
                    {item.icon}
                  </span>
                  {item.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
