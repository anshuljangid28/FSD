import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? '' : 'collapsed'}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? '◀' : '▶'}
      </button>
      {isOpen && (
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/charusat">Charusat</Link></li>
          <li><Link to="/depstar">Depstar</Link></li>
          <li><Link to="/cse">CSE</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Sidebar;
