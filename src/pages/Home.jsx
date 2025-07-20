import React from 'react';
import './Home.css';

const Home = () => (
  <section id="home" className="vh-100 d-flex align-items-center justify-content-center flex-column bg-light text-center">
    <h1>Hi, I'm Thamotharapandi</h1>
    <p className="lead">Aspiring Software/Web Developer & Tester</p>
    <a href="/resume.pdf" download className="btn btn-primary">Download Resume</a>
  </section>
);

export default Home;
