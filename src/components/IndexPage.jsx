import React from 'react';
import { Link } from 'react-router-dom';
import './IndexPage.css'; // Optional: for styling modularity

const IndexPage = () => {
  return (
    <div className="index-container">
      <header className="hero">
        <h1>Welcome to Joe's Modular Playground</h1>
        <p>Cloud-native, containerized, and built to teach.</p>
      </header>

      <section className="grid-section">
        <div className="card">
          <h2>LinkedIn</h2>
          <p>Get to see other interests, likes, and followings.</p>
          <a
            href="https://www.linkedin.com/in/joe-bodden/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Profile
          </a>
        </div>
      </section>


      <section className="grid-section">
        <div className="card">
          <h2>GitHuB</h2>
          <p>Get to see other interests, likes, and followings.</p>
          <a
            href="https://github.com/joeitguy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Profile
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>Deployed across Azure, AWS, GCP, and Heroku. Built with ❤️ in El Cajon.</p>
      </footer>
    </div>
  );
};

export default IndexPage;