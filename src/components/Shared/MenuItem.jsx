import React, { useState } from 'react';
import './MenuItem.css';

const MenuItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <a href="/">{title}</a>
      {isOpen && (
        <ul className="submenu">
          {children}
        </ul>
      )}
    </li>
  );
};

export default MenuItem;