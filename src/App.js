import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Internship from './pages/Internship';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Internship />
      <Certifications />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
