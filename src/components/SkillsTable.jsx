import React from 'react';
import './SkillsTable.css';

const SkillsTable = () => {
  return (
    <div className="skills-container">
      <table className="skills-table">
        <tbody>
          <tr>
            <th>Languages</th>
            <td>Python, T-SQL, JQL</td>
          </tr>
          <tr>
            <th>Tools & IDEs</th>
            <td>SSMS, Visual Studio, PGAdmin, Flask, Splunk, Colab</td>
          </tr>
          <tr>
            <th>DevOps & Admin</th>
            <td>Docker, Server Admin, AD, Atlassian, Heroku, Jupyter Notebooks</td>
          </tr>
          <tr>
            <th>Reporting & ETL</th>
            <td>SSRS, SSIS, PowerShell, ER Diagrams, Data Visualization</td>
          </tr>
          <tr>
            <th>Additional Skills</th>
            <td>Jira, Database Admin, Troubleshooting, Documentation</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SkillsTable;