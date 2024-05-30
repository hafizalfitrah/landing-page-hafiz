import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#profile">Profil Sekolah</a></li>
        <li><a href="#partnership">Kemitraan</a></li>
        <li><a href="#careers">Karir</a></li>
        <li><a href="#donation">Donasi</a></li>
        <li><a href="#contact">Kontak</a></li>
        <li><a href="#ppdb" className="ppdb-button">PPDB</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
