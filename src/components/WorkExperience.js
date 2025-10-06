import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import newLogo from "../assets/img/ttlogo.png";
import AloLogo from "../assets/img/alologo.png";

export const WorkExperience = () => {
  return (
    <section className="project" id="workExperience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Work Experience</h2>
                  <div className="text-center">
                    <img
                      src={AloLogo}
                      className="bg-white rounded"
                      alt="Company Logo"
                      style={{ width: "150px" }}
                    />
                  </div>
                  <p>
                    Working as a Java Developer<br></br>
                    Oct 2025 - Present
                  </p>
                  <div className="text-center">
                    <img
                      src={newLogo}
                      alt="Company Logo"
                      style={{ width: "150px" }}
                    />
                  </div>
                  <p>
                    Worked as a Full Stack Java Developer<br></br>
                    Aug 2024 - Sep 2024<br></br>
                  </p>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
