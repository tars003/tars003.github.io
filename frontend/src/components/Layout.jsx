import React from 'react';
import { User, Code, FileText, Wrench, List, Mail, Download, Github, Linkedin } from 'lucide-react';
import './Layout.css';

const Layout = ({ activeSection, setActiveSection, children }) => {
  const navItems = [
    { id: 'about', label: 'about', icon: User },
    { id: 'projects', label: 'projects', icon: Code },
    { id: 'writing', label: 'writing', icon: FileText },
    { id: 'tools', label: 'tools', icon: Wrench },
    { id: 'lists', label: 'lists', icon: List },
    { id: 'contact', label: 'contact', icon: Mail },
  ];

  const resumeLink = "https://drive.google.com/file/d/1mO6jx3GMz1VqnAJAvo6ApJzPIcd1VkvP/view?usp=sharing";

  return (
    <div className="layout">
      {/* Desktop Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1 className="sidebar-title">Ajay Sharma</h1>
          <p className="sidebar-subtitle">Lead Full Stack Engineer</p>
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <a 
            href={resumeLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-item resume-link"
          >
            <Download size={18} />
            <span>resume</span>
          </a>
        </nav>
        <div className="sidebar-footer">
          <a 
            href="https://github.com/tars003" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/ajay-sharma-453348142" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {children}
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="mobile-tab-bar">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`mobile-tab ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Floating Resume Button */}
      <a 
        href={resumeLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mobile-resume-button"
        aria-label="View Resume"
      >
        <Download size={18} />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Layout;
