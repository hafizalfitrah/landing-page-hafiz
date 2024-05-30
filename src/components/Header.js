import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Islamic Boarding School</h1>
      <h2>SMK TI BAZMA</h2>
      <p>
        Sekolah Menengah Kejuruan Teknologi Informasi Bazma (SMK TI BAZMA) 
        merupakan sekolah unggulan berasrama yang diperuntukkan bagi anak-anak 
        tidak mampu...
      </p>
      <button className="btn">Selengkapnya</button>
    </header>
  );
}

export default Header;