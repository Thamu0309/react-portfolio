import React from 'react';

function Skills() {
  return (
    <div className="container mt-5" id="skills">
      <h2 className="text-center mb-4">Skills</h2>
      <div className="row justify-content-center text-center">
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-html5-plain colored" style={{ fontSize: '40px' }}></i>
          <p>HTML</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-css3-plain colored" style={{ fontSize: '40px' }}></i>
          <p>CSS</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-bootstrap-plain colored" style={{ fontSize: '40px' }}></i>
          <p>Bootstrap</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-javascript-plain colored" style={{ fontSize: '40px' }}></i>
          <p>JavaScript</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-react-original colored" style={{ fontSize: '40px' }}></i>
          <p>React</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-java-plain colored" style={{ fontSize: '40px' }}></i>
          <p>Java</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-python-plain colored" style={{ fontSize: '40px' }}></i>
          <p>Python</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-spring-plain colored" style={{ fontSize: '40px' }}></i>
          <p>Spring Boot</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-mysql-plain colored" style={{ fontSize: '40px' }}></i>
          <p>MySQL</p>
        </div>
        <div className="col-3 col-md-2 mb-3">
          <i className="devicon-git-plain colored" style={{ fontSize: '40px' }}></i>
          <p>Git</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
