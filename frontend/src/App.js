import React, { useState } from 'react';
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Tools from './components/Tools';
import Lists from './components/Lists';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'writing':
        return <Writing />;
      case 'tools':
        return <Tools />;
      case 'lists':
        return <Lists />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderSection()}
    </Layout>
  );
}

export default App;
