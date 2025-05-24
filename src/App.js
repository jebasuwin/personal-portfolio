import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // AOS styles
import AOS from 'aos';
import { useEffect } from 'react';

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { WorkExperience } from './components/WorkExperience';
import { EducationalBackground } from './components/EducationalBackground';
import { Training } from './components/Training';
import { Accomplishments } from './components/Accomplishments';
import VideoBackground from './components/VideoBackground';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,     // Make sure animations repeat
      mirror: true,    // Trigger animations when scrolling up
      offset: 100,     // Adjust how early the animation should start
    });

    // Refresh AOS on scroll to prevent sync issues
    const onScroll = () => AOS.refresh();
    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="App">
      <VideoBackground />

      
        <NavBar />
      

      <div data-aos="fade-up">
        <Banner />
      </div>

        <Skills />

      <main>
        <div data-aos="fade-right">
          <WorkExperience />
        </div>

        <div data-aos="zoom-in-down">
          <Projects />
        </div>

        <div data-aos="fade-left">
          <Training />
        </div>

        <div data-aos="fade-right">
          <EducationalBackground />
        </div>

        <div data-aos="fade-up">
          <Accomplishments />
        </div>

        <div data-aos="zoom-in-up">
          <Contact />
        </div>
      </main>

      <div data-aos="fade-up">
        <Footer />
      </div>
    </div>
  );
}

export default App;
