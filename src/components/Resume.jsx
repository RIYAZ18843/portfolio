import React from 'react';
import Footer from "./Footer";
import Navbar from './Navbar';
import './Resume.css'; // Import your CSS file

const Resume = () => {
  // Function to open PDF link
  const openResume = () => {
    window.open('file:///C:/Users/user/Downloads/React.js_RIYAZ_RESUME_IT_188_HR.pdf');
  };

  return (
    <div className="resume-container">
      <Navbar />
      <div className="resume-content">
        
        <button className="view-resume-btn" onClick={openResume}>
          View Resume PDF
        </button>
        {/* Add your resume content here */}
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
