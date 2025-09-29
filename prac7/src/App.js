import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import Charusat from './pages/Charusat';
import Depstar from './pages/Depstar';
import CSE from './pages/Cse';

function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Router>
      <div className="app-container">
        <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
        <div className={`page-content ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charusat" element={<Charusat />} />
            <Route path="/depstar" element={<Depstar />} />
            <Route path="/cse" element={<CSE />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
