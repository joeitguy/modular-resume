import React from 'react';
import './ReadmePage.css';

function ReadmePage() {
  return (
    <div className="readme-page">
      <header>
        <h1>📘 Project README</h1>
        <p className="subtitle">Resume Builder • React • Modular Identity</p>
      </header>

      <section className="readme-content">
        <h2>Overview</h2>
        <p>
          This project showcases a modular, React-based resume and portfolio system for Joseph W.P. Bodden Jr.
          It includes dynamic components for cover letters, technical skills, highlight reels, and printable layouts.
        </p>

        <h2>Tech Stack</h2>
        <ul>
          <li>React (functional components, hooks)</li>
          <li>CSS Modules for scoped styling</li>
          <li>Dockerized backend (Flask, Postgres)</li>
          <li>Heroku deployment</li>
        </ul>

        <h2>Features</h2>
        <ul>
          <li>Modular resume sections (CoverLetter, SkillsSummary, HighlightReels)</li>
          <li>Print/download button with responsive layout</li>
          <li>Custom NavButtons for page routing</li>
          <li>Clean typography and layout for professional presentation</li>
        </ul>

        <h2>Usage</h2>
        <p>
          Navigate using the top buttons to view different sections. Each page is styled for clarity and print-readiness.
          The Print button hides itself during printing for clean output.
        </p>

        <h2>Future Enhancements</h2>
        <ul>
          <li>PDF export and download</li>
          <li>Dynamic form-based resume builder</li>
          <li>Versioned identity vault with UPC routing</li>
        </ul>

        <h2>Author</h2>
        <p>
          Joseph W.P. Bodden Jr. • <a href="mailto:joeitguy@gmail.com">joeitguy@gmail.com</a> • San Diego, CA
        </p>
      </section>
    </div>
  );
}

export default ReadmePage;