import React from 'react';
import './Resume.css';
import SkillsTable from './SkillsTable';
import PrtButton from './PrtButton';


export default function Resume() {
  return (
    <div className="Print Page">
      <PrtButton label="Print Page" />

      <section className="skills">
        <h3>Skills Overview</h3>
        <SkillsTable />
      </section>

      <section className="experience">
  

        <h3>Professional Experience</h3>



        <div className="job">
          <h4>Integration Support Analyst</h4>
          <p>Vistage Worldwide, Inc. <span>Sep 2018 – Mar 2025</span></p>
          <ul>
            Resolved 95% of issues using T-SQL, Jira, and Splunk, reducing incident response by 35%
            Automated cross-product reporting pipelines to trace and fix multi-system inconsistencies
            Built SSRS dashboards and Python scripts to empower stakeholders with real-time insights
          </ul>
        </div>

        <div className="job">
          <h4>Data Reporting Analyst</h4>
          <p>Pala Casino Spa & Resort <span>Mar 2017 – Sep 2018</span></p>
          <ul>
            Designed and maintained SQL-based reporting systems for casino operations
            Collaborated with finance and marketing teams to deliver actionable insights
            Streamlined data validation processes, improving report accuracy by 20%
          </ul>
        </div>

        <div className="job">
          <h4>Senior Systems Analyst</h4>
          <p>Jackson Rancheria Casino <span>Nov 2012 – Sep 2017</span></p>
          <ul>
            Managed and supported core gaming systems, ensuring 99.9% uptime
            Diagnosed and resolved data-related issues to maintain reporting accuracy
            Documented workflows and led peer-training sessions on best practices
          </ul>
        </div>
      </section>

      <section className="military">
        <h3>Military Service</h3>
        <p>
          United States Navy — Corpsman (E-3) <span>1993 – 1995</span><br />
          Honorable Service
        </p>
      </section>

      <section className="education">
        <h3>Education</h3>
        <p>
          American InterContinental University<br />
          AS, Business Administration & Management <span>2009 – 2011</span>
        </p>
        <p>
          Nucamp<br />
          DevOps Specialization: Backend, SQL & Python <span>2025</span>
        </p>
      </section>

      <section className="certifications">
        <h3>Certifications</h3>
        <p>
          PCEP™ – Certified Entry-Level Python Programmer <span>2025</span><br />
          <a
            href="https://verify.openedg.org/?id=6ofw.4JrC.7zxc"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verification Link
          </a>
        </p>
      </section>
    </div>
  );
}