import React from 'react';
import './Tools.css';

const Tools = () => {
  const tools = [
    {
      name: 'NestJS',
      description: 'My default for any backend that’ll be touched by more than one developer. The structure pays off fast.'
    },
    {
      name: 'Express',
      description: 'When I need to move quickly or the project doesn’t justify the overhead of a framework.'
    },
    {
      name: 'FastAPI',
      description: 'First choice when the service is Python and latency matters. Especially for AI-adjacent microservices.'
    },
    {
      name: 'PostgreSQL',
      description: 'My primary database. Reach for it first, justify moving away from it second.'
    },
    {
      name: 'ClickHouse',
      description: 'When Postgres starts struggling with analytical queries at volume. Not for everything, but irreplaceable when you need it.'
    },
    {
      name: 'Redis',
      description: 'Caching, rate limiting, pub/sub. Rarely the star, always useful.'
    },
    {
      name: 'AWS',
      description: 'Where most of my production systems live. Batch, ECS, Lambda, SQS — depending on the workload shape.'
    },
    {
      name: 'Coolify',
      description: 'For internal tools and client projects that don’t need the full AWS surface area. Underrated.'
    },
    {
      name: 'Vertex AI / OpenAI',
      description: 'Depending on whether the client is on GCP or not. The orchestration layer matters more than which model you pick.'
    },
    {
      name: 'Docker',
      description: 'Non-negotiable. Every service, every environment.'
    }
  ];

  return (
    <div className="section-container tools-section">
      <h2 className="section-title">Tools</h2>
      <div className="tools-list">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item">
            <h3 className="tool-name">{tool.name}</h3>
            <div className="tool-divider"></div>
            <p className="tool-description">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tools;
