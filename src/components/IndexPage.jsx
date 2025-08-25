import React from 'react';
import './IndexPage.css';

const Card = ({ title, description, link }) => (
  <div className="card">
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">
      Visit Profile
    </a>
  </div>
);

const IndexPage = () => {
  const cards = [
    {
      title: 'LinkedIn',
      description: 'Get to see other interests, likes, and followings.',
      link: 'https://www.linkedin.com/in/joe-bodden/',
    },
    {
      title: 'GitHub',
      description: 'More details on the build of this application.',
      link: 'https://github.com/joeitguy/modular-resume',
    },
    {
      title: 'GitHub Other Projects',
      description: 'More details on other projects.',
      link: 'https://github.com/joeitguy/',
    },
  ];

  return (
    <div className="index-container">
      <header className="hero">
        <h1>Welcome to Joe's Modular Playground</h1>
        <p>Cloud-native, containerized, and built to teach.</p>
      </header>

      <section className="grid-section">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      <footer className="footer">
        <p>Deployed across Azure, AWS, GCP, and Heroku. Built with ❤️ in El Cajon.</p>
      </footer>
    </div>
  );
};

export default IndexPage;