import React from 'react';
import { Link } from 'react-router-dom';
import { MdArchive } from 'react-icons/md';

function Navigation() {
  return (
    <header>
      <h1><Link to="/">Aplikasi Catatan</Link></h1>
      <nav className="navigation">
        <ul>
          <li><Link to="/archives"><MdArchive style={{ verticalAlign: 'middle', marginTop: '-2px', marginRight: '4px' }} />Arsip</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
