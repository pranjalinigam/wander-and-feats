import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const links = [
    { to: '/', label: 'Home' },
    { to: '/stories', label: 'Stories' },
    { to: '/destinations', label: 'Destinations' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="logo">
          <span>✦</span> Wander &amp; Whimsy
        </Link>

        <div className="nav-links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {l.label}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <button
            className="mobile-toggle icon-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/'} onClick={() => setMenuOpen(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}