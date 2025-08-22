// src/App.jsx
import React from 'react';
import Layout from './components/Layout';
import ProfileImage from './components/ProfileImage';
import VideoFrame from './components/VideoFrame';
import ActionButtons from './components/ActionButtons';

function App() {
  return (
    <Layout>
      <ProfileImage src="/images/gerald.png" alt="Gerald's photo" />
      <VideoFrame url="https://www.youtube.com/embed/yourVideoID" />
      <ActionButtons />
      {/* Add ExperienceList, SkillsGrid, etc. */}
    </Layout>
  );
}

export default App;
