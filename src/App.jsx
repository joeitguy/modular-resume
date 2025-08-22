import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import SkillsSummary from './components/SkillsSummary';
import ReadmePage from './components/ReadmePage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/Resume" element={<Resume />} />
          <Route path="/CoverLetter" element={<CoverLetter />} />
          <Route path="/SkillsSummary" element={<SkillsSummary />} />
          <Route path="/ReadmePage" element={<ReadmePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}



export default App;