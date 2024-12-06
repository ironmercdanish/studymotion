import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

//component imports here!
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './components/Login';
import About from './components/About';
import VirtualLab from './components/VirtualLab';
import Project from './components/Project';
import Resume from './components/Resume';
import TcsNqtPrep from './components/TcsNqtPrep';
import PBC from './components/PBC';
import DsaCp from './components/DsaCp';
import Telegram from './components/Telegram';
import Youtube from './components/Youtube';
import Contact from './components/Contact';
import Aktuquantum from './components/Aktuquantum';
import PageNotFound from './components/PageNotFound';
import Services from './components/Services';

function App() {
  // State to manage theme mode
  const [mode, setMode] = useState(localStorage.getItem('mode') || 'light');

  // Function to toggle theme mode
  const toggleMode = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('mode', newMode);
    document.body.className = ''; // Reset class
    document.body.classList.add(newMode); // Add the new mode class
  };

  // Set initial theme mode on load
  useEffect(() => {
    document.body.className = ''; // Reset class
    document.body.classList.add(mode); // Apply mode class
  }, [mode]);

  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<Login mode={mode} toggleMode={toggleMode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/virtuallab" element={<VirtualLab mode={mode} />} />
          <Route exact path="/aktuquantum" element={<Aktuquantum mode={mode} />} />
          <Route exact path="/project" element={<Project mode={mode} />} />
          <Route exact path="/resume" element={<Resume mode={mode} />} />
          <Route exact path="/tcsnqtprep" element={<TcsNqtPrep mode={mode} />} />
          <Route exact path="/ProductBasedPrep" element={<PBC mode={mode} />} />
          <Route exact path="/DsaCp" element={<DsaCp mode={mode} />} />
          <Route exact path="/telegram" element={<Telegram mode={mode} />} />
          <Route exact path="/youtube" element={<Youtube mode={mode} />} />
          <Route exact path="/contact" element={<Contact mode={mode} />} />
          <Route exact path="/services" element={<Services mode={mode} />} />
          <Route path="*" element={<PageNotFound mode={mode} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
    
  );
}

export default App;
