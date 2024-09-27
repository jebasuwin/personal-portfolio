import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import newLogo from '../assets/img/newlogo.png';


export const Training = () => {

  return (
    <section className="project" id="training">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Training/Course <br></br>Certifications</h2>
                <div className="text-center">
                {/* <img src={newLogo} alt="Company Logo" style={{ width: '150px' }} /> */}
                </div>
                <p>Full Stack Development- Besant Technologies, Bangalore<br></br>
                Jul 2023 - Mar 2024<br></br>
                <a href="https://drive.google.com/file/d/1sG5UMEkr3sSgCN-TELnsMrdsBtaq23L0/view" target="_blank">
                      Certification Link
                </a><br></br><br></br>
                Manual Testing- Besant Technologies, Bangalore<br></br>
                Jul 2023 - Mar 2024<br></br>
                <a href="https://drive.google.com/file/d/1sG5UMEkr3sSgCN-TELnsMrdsBtaq23L0/view" target="_blank">
                      Certification Link
                </a>
                <br></br><br></br>
                Introduction to Python- Internshala<br></br>
                Apr 2021 - Jul 2021<br></br>
                <a href="https://drive.google.com/file/d/1sG5UMEkr3sSgCN-TELnsMrdsBtaq23L0/view" target="_blank">
                      Certification Link
                </a>
                </p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}