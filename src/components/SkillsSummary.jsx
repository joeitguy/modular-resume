import React from 'react';
import './SkillsSummary.css';
import PrtButton from './PrtButton';

function SkillsSummary() {
  return (
    <div className="skills-summary">
      <header>
        <PrtButton label="Print Page" />
        <h2>Technical Skills Summary</h2>
        <p className="contact-info">
          <a href="mailto:joeitguy@gmail.com">joeitguy@gmail.com</a> • (619) 438-3236 • <a href="https://linkedin.com/in/joe-bodden">LinkedIn</a>
        </p>
      </header>

      <section className="skills-section">
        <ul>
          <li>Performance tuning & diagnostics using SolarWinds, Splunk, SQL DMVs, and custom stored procedures</li>
          <li>Simulation engine development in Python with modular architectures and error simulations</li>
          <li>Containerization & scaling via Docker, Flask-Migrate, and Git workflows</li>
          <li>Automated reporting & visualization using SSRS, draw.io, and Excel integrations</li>
          <li>Architecture of resilient, high-volume SQL Server environments (2016–2025)</li>
        </ul>
      </section>

      <section className="competencies">
        <h3>Core Competencies</h3>

        <div className="competency-zone">
          <h4>Ops Expertise</h4>
          <ul>
            <li>SQL integration & analysis across production and development</li>
            <li>Schema versioning & deployment with ApexSQL and migrations</li>
            <li>Data ingestion, reliability checks, and structure updates</li>
            <li>Pipeline automation with PowerShell & Bash</li>
          </ul>
        </div>

        <div className="competency-zone">
          <h4>Bridge Zone</h4>
          <ul>
            <li>Schema-first mindset with modular architecture principles</li>
            <li>Empathic error handling & robust recovery routines</li>
            <li>Rapid MVP prioritization under tight deadlines</li>
          </ul>
        </div>

        <div className="competency-zone">
          <h4>Dev Craft</h4>
          <ul>
            <li>Python scripting for feature development & SQL automation</li>
            <li>Flask API design, interactive dashboards, and splash screens</li>
            <li>Containerization with Docker and Heroku deployment</li>
            <li>Test-driven development, CI/CD, and Infrastructure as Code</li>
          </ul>
        </div>

        <div className="competency-zone">
          <h4>DevOps Identity</h4>
          <ul>
            <li>Build → Test → Deploy → Monitor → Iterate</li>
            <li>Operational rigor folded into development creativity</li>
            <li>From guardian of stability to architect of change</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default SkillsSummary;