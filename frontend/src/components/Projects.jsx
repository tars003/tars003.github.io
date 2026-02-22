import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'US Event Ticketing Market Aggregator',
      description: 'A real-time data aggregation engine tracking live ticket prices across major US event platforms — functionally similar to a stock market ticker but for event listings.\n\nBuilt the distributed scraping and ingestion pipeline from scratch, handling 40 million ticket listing insertions per day. Designed the database architecture using PostgreSQL and ClickHouse to sustain real-time analytics for 200 concurrent brokers without latency degradation.',
      tags: ['AWS Batch', 'ClickHouse', 'PostgreSQL', 'Node.js', 'Distributed Systems']
    },
    {
      title: 'Intelligent Social Media Marketing Platform',
      description: 'A platform that replaces traditional agency workflows for MSMEs by automating marketing content generation end-to-end using generative AI.\n\nArchitected the core backend and built a custom multimodal AI orchestration engine — chaining foundational models together using context engineering to automate generation of marketing video clips and images at scale.',
      tags: ['Node.js', 'Python', 'LLM Orchestration', 'Multimodal AI', 'AWS', 'GCP Vertex AI']
    },
    {
      title: 'Fintech Analytics Platform — SEA Market',
      description: 'A risk assessment and portfolio monitoring system built for a venture firm tracking P2P and BNPL lending startups across South East Asia — processing multi-decade financial time-series data per company.\n\nDesigned the data ingestion backend, complex financial schemas, and high-availability APIs powering the client’s investment decision dashboard.',
      tags: ['PostgreSQL', 'Node.js', 'Python', 'Financial Data Modelling', 'AWS']
    }
  ];

  return (
    <div className="section-container projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
