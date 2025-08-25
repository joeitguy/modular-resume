import React from 'react';
import './Layout.css';
import NavButtons from './NavButtons/NavButtons';

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="resume-header">
        <h1>Joseph W.P. Bodden Jr.</h1>
        <h2>Integration & Data Analytics Engineer | Application Support</h2>
          <p className="contact">
            <a href="mailto:joeitguy@gmail.com">joeitguy@gmail.com</a> · (619) 438-3236 · San Diego, CA ·{' '}
            <a href="https://www.linkedin.com/in/joe-bodden/">LinkedIn</a>


          </p>
      </header>
      <section className="mission">
        <p style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: '1.6' }}>
          <strong>
             “Built to support. Wired to solve.”
            ______________________________________________________________

          </strong>
                      <span className="nav-wrapper">
              <NavButtons />
            </span>
        </p>
      </section>

      <main>{children}</main>

      <footer>
        2025 Joe Bodden • Building with purpose
      </footer>
    </div>
  );
}

export default Layout;