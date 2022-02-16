import React from 'react';
import NavBar from './Navbar'
import MainContent from './MainContent';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
import Footer from './Footer';
import WatchCode from './WatchCode';
import './App.css';





function App() {
  return (
    <div className="App">
     <NavBar />
     <MainContent />
    
     <Resume />
     <Skills />
     <Projects />
     <WatchCode />
     <Footer />
    </div>
  );
}

export default App;
