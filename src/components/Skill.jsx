import React from 'react';
import './Skill.css';  // Import the CSS file
import Footer from './Footer';
import Navbar from './Navbar';

const Skill = () => {
  const skills = ["React.js", "Redux.js", "HTML", "CSS", "Bootstrap", "GitHub"];

  return (
    <div className="skill-page">
      <Navbar/>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            {skill}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Skill;
