import React from 'react';
import { ExternalLink } from 'lucide-react';
import './Lists.css';

const Lists = () => {
  const reading = [
    { title: 'Stoner', author: 'John Williams' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Almanack of Naval Ravikant' },
    { title: 'Atomic Habits', author: 'James Clear' }
  ];

  const software = [
    {
      name: 'pi',
      description: 'open-source AI agent toolkit with a coding agent CLI. Minimal, self-hostable alternative to Claude Code.',
      link: 'https://github.com/badlogic/pi-mono'
    },
    { name: 'Claude Code' },
    { name: 'Obsidian' },
    { name: 'WSL' }
  ];

  const problems = [
    'What are Bloom Filters?',
    'Caching in LLMs'
  ];

  return (
    <div className="section-container lists-section">
      <h2 className="section-title">Lists</h2>
      
      <div className="lists-container">
        <div className="list-block">
          <h3 className="list-heading">Reading</h3>
          <ul className="list-items">
            {reading.map((item, index) => (
              <li key={index} className="list-item">
                <span className="item-title">{item.title}</span>
                {item.author && <span className="item-meta"> — {item.author}</span>}
              </li>
            ))}
          </ul>
        </div>

        <div className="list-block">
          <h3 className="list-heading">Software</h3>
          <ul className="list-items">
            {software.map((item, index) => (
              <li key={index} className="list-item">
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" className="software-link">
                    <span className="item-title">{item.name}</span>
                    <ExternalLink size={14} className="external-icon" />
                  </a>
                ) : (
                  <span className="item-title">{item.name}</span>
                )}
                {item.description && <p className="item-description">{item.description}</p>}
              </li>
            ))}
          </ul>
        </div>

        <div className="list-block">
          <h3 className="list-heading">Interesting Problems</h3>
          <ul className="list-items">
            {problems.map((item, index) => (
              <li key={index} className="list-item">
                <span className="item-title">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lists;
