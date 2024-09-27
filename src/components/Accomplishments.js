import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Accomplishments = () => {

  return (
    <section className="project" id="Accomplishments">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Accomplishments</h2>
                  <p>International Conference on Electrical, Electronics & Computer Science(ICEECS) held in Tirunelveli<br></br>
                    Apr 2023 - May 2023<br></br>
                    Presented a paper entitled “Development of Smart Wheelchair for Safety System” at the International Conference on Electrical, Electronics & Computer Science(ICEECS) held in Tirunelveli.<br></br>
                    <a href="https://drive.google.com/file/d/1Zdo2GSF6d2CYSWaDTmm01miUpERHrPI2/view" target="_blank">
                      Certification Link</a><br></br>
                    <a href="https://drive.google.com/file/d/1i6JTyRdxm06QJIDDF47MjaKfWnVR_Mmn/view" target="_blank">
                      Project Link
                    </a><br></br><br></br>
                    Project Expo 2022<br></br>
                    May 2023 - May 2023
                    <br></br>Achived 1st prize by doing the project under IOT domain.(Smart Green House using ESP8266)<br></br>
                    <a href="https://drive.google.com/file/d/1sG5UMEkr3sSgCN-TELnsMrdsBtaq23L0/view" target="_blank">
                      Certification Link
                    </a>
                  </p>
                <h2>Interests</h2>
                <li>Workouts 💪</li>
                <li>Volley Ball 🏐</li>
                <li>Photography 📸</li>
                <li>Web Designing 💻</li>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}