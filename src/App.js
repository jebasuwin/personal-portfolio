import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
  return (
    <div className="App">
      
      <VideoBackground/>
      <NavBar />
      <Banner />
      <Skills />
      <main>
        <WorkExperience/>
        <Projects />
        <Training/>
        <EducationalBackground/>
        <Accomplishments/>
        <Contact />
      </main>
      <Footer />
      
    </div>
  );
}

export default App;