import { Container, Row, Col } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export const Accomplishments = () => {

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="project" id="Accomplishments">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Accomplishments</h2>
                  <p>
                    International Conference on Electrical, Electronics & Computer Science(ICEECS) held in Tirunelveli<br />
                    Apr 2023 - May 2023<br />
                    Presented a paper entitled “Development of Smart Wheelchair for Safety System” at the International Conference on Electrical, Electronics & Computer Science(ICEECS) held in Tirunelveli.<br />
                    <a href="https://drive.google.com/file/d/1Zdo2GSF6d2CYSWaDTmm01miUpERHrPI2/view" target="_blank" rel="noreferrer">
                      Certification Link
                    </a><br />
                    <a href="https://drive.google.com/file/d/1LGClc8uOR4KuB1gAMl53IiHQMXaXjOor/view?usp=sharing" target="_blank" rel="noreferrer">
                      Project Link
                    </a><br /><br />
                    Project Expo 2022<br />
                    May 2023 - May 2023<br />
                    Achieved 1st prize by doing the project under IOT domain. (Smart Green House using ESP8266)<br />
                    {/* <a href="https://drive.google.com/file/d/1sG5UMEkr3sSgCN-TELnsMrdsBtaq23L0/view" target="_blank" rel="noreferrer">
                      Certification Link
                    </a> */}
                  </p>
                </div>
              }
            </TrackVisibility>
            <br /><br /><br />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col size={12}>
            <div data-aos="fade-right" data-aos-duration="1000">
              <h2>Interests</h2>
              <li>Workouts 💪</li>
              <li>Volley Ball 🏐</li>
              <li>Photography 📸</li>
              <li>Web Designing 💻</li>
              <br /><br /><br /><br />
            </div>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
}
