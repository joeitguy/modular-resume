import React from 'react';
import './CoverLetter.css';
import PrtButton from './PrtButton';



function CoverLetter() {
  return (
    
    <div className="cover-letter">
      <header>
        <PrtButton label="Print Page" />




        <h1>Cover Letter</h1>
        <p className="contact">
          <a href="mailto:joeitguy@gmail.com">joeitguy@gmail.com</a> • (619) 438-3236 • <a href="https://linkedin.com/in/joe-bodden">LinkedIn</a>
        </p>
      </header>

      <section className="letter-body">
        <p>To whom it may concern,</p>

        <p>
          With over a decade of experience in application support, systems integration, and data analytics,
          I bring a results-driven mindset rooted in strong technical expertise and a proven commitment to
          resilient, scalable infrastructure. My PCEP™ Python certification and hands-on mastery of SQL Server
          environments reflect a foundation built not just on knowledge—but on delivering mission-critical
          solutions in fast-paced environments.
        </p>

        <p>
          In my recent role as Integration Support Analyst at Vistage Worldwide, I led root-cause analysis using
          advanced T-SQL, Splunk, and Jira while developing automated reporting with SSRS to streamline operations
          and empower key stakeholders. My work in containerized deployments and Python automation exemplifies a
          DevOps-centric approach that values performance, precision, and long-term system integrity.
        </p>

        <p>
          I’m drawn to companies that blend innovation with legacy and sustainable impact. I believe technology
          should drive meaningful outcomes, and I strive to contribute where systems not only evolve but do so
          with purpose and accountability.
        </p>

        <p>
          I’d welcome the opportunity to bring my technical fluency, diagnostic rigor, and collaborative energy
          to your team. Whether it's architecting high-availability SQL Server clusters or mentoring peers through
          complex troubleshooting, I’m ready to make an enduring contribution.
        </p>

        <p>Thank you for your time and consideration—I look forward to the chance to connect.</p>

        <p className="closing">
          Warm regards,<br />
          Joseph W.P. Bodden Jr.<br />
          (619) 438-3236 • <a href="mailto:joeitguy@gmail.com">joeitguy@gmail.com</a>
        </p>
      </section>
    </div>
  );
}

export default CoverLetter;