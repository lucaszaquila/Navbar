import React from 'react';
import './Navbar.css';

function Navbar({children, mode, coluns, os}) {
  return (
    <div className={`navbar ${mode} ${coluns} ${os}`}>
        {children}
    </div>
  );
}

export default Navbar;