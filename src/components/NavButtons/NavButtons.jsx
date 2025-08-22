// src/components/NavButtons/NavButtons.jsx

import { useNavigate } from 'react-router-dom';
import './NavButtons.css'; // Optional: create this file for styling

export default function NavButtons() {
  const navigate = useNavigate();

  return (
    <div className="nav-buttons">
      <button className="nav-btn" onClick={() => navigate('/resume')}>
        📄 Resume
      </button>
      <button className="nav-btn" onClick={() => navigate('/coverletter')}>
        📝 Cover Letter
      </button>
      <button className="nav-btn" onClick={() => navigate('/SkillsSummary')}>
        🎬 Technical Skills
      </button>
      <button className="nav-btn" onClick={() => navigate('/ReadmePage')}>
        🎬 Read Me
      </button>
      
    </div>
  );
}