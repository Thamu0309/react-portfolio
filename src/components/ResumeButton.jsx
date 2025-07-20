import React from 'react';

function Resume() {
  return (
    <div className="container mt-5" id="resume">
      <h2 className="text-center mb-4">Resume</h2>
      <div className="text-center">
        <a
          href="/images/resume.pdf"  // 📎 replace with your actual resume path
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download Resume (PDF)
        </a>
      </div>
      <div className="mt-4">
        <h4>Education</h4>
        <ul>
          <li><strong>B.Sc CS (AI & DS)</strong>, Karpagam Academy of Higher Education – 8.7 CGPA</li>
          <li><strong>DCH</strong>, Konghu Vellar Polytechnic College – 91.6%</li>
          <li><strong>HSC & SSLC</strong>, Shri Renuga Vidhyalam – 55.6% / 75.6%</li>
        </ul>

        <h4 className="mt-4">Skills</h4>
        <ul>
          <li>Languages: Python, Java, JavaScript, HTML, CSS, SQL</li>
          <li>Frameworks: React.js, Spring Boot, Django</li>
          <li>Tools: Git, GitHub, VS Code, IntelliJ IDEA</li>
          <li>Testing: Selenium</li>
        </ul>
      </div>
    </div>
  );
}

export default Resume;
