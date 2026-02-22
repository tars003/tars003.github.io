import React from 'react';
import { Download } from 'lucide-react';
import './About.css';

const About = () => {
  const resumeLink = "https://drive.google.com/file/d/1mO6jx3GMz1VqnAJAvo6ApJzPIcd1VkvP/view?usp=sharing";

  return (
    <div className="section-container about-section">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p>I'm Ajay, a Lead Full Stack Engineer based in Mumbai.</p>
        
        <p>I spend most of my time in the space where large-scale backend systems meet applied AI — building infrastructure that handles real data volume, and making that infrastructure intelligent enough to do useful things with it.</p>
        
        <p>Currently leading a team of 5 at Dwebbox, where I own everything from system design and backend architecture to cloud infrastructure and AI integration across multiple client products simultaneously.</p>
        
        <p>My background is primarily Node.js and Python on the backend, AWS and GCP on the infrastructure side, and LLM orchestration on the AI side. I've built systems that ingest tens of millions of records daily, and separately, systems that chain foundational AI models together to automate workflows that previously required entire teams.</p>
        
        <p>I'm not a specialist. I'm the engineer you bring in when the problem doesn't fit neatly into one category.</p>

        <a 
          href={resumeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link-inline"
        >
          <Download size={18} />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
};

export default About;
