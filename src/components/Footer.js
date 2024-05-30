import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/logo.png" alt="SMK TI BAZMA" />
      </div>
      <div className="footer-info">
        <div>
          <h3>Lokasi</h3>
          <p>Jl. Raya Cikampek Cicadas RT. 001/RW 001, Kecamatan Ciampea, Kabupaten Bogor, Jawa Barat 16620</p>
        </div>
        <div>
          <h3>Email</h3>
          <p>info@smktibazma.sch.id</p>
        </div>
        <div>
          <h3>Nomor Telepon</h3>
          <p>08 1111 4433 9</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;