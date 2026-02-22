import React from 'react';
import { User, Code, FileText, Wrench, List, Mail } from 'lucide-react';
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
        </nav>
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
    </div>
  );
};

export default Layout;
