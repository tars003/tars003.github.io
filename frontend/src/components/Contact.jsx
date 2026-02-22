import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const contacts = [
    {
      type: 'Email',
      value: 'sharmaajay2kuu@gmail.com',
      link: 'mailto:sharmaajay2kuu@gmail.com',
      icon: Mail
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/ajay-sharma-453348142',
      link: 'https://linkedin.com/in/ajay-sharma-453348142',
      icon: Linkedin
    },
    {
      type: 'GitHub',
      value: 'github.com/tars003',
      link: 'https://github.com/tars003',
      icon: Github
    }
  ];

  return (
    <div className="section-container contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-list">
        {contacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div key={index} className="contact-item">
              <div className="contact-icon">
                <Icon size={24} />
              </div>
              <div className="contact-details">
                <p className="contact-type">{contact.type}</p>
                <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                  {contact.value}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
