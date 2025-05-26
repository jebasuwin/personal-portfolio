import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import telephone from "../assets/img/telephone.svg";
import envelope from "../assets/img/envelope.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <div className="contact-details">
              <div className="social-icon">
                <a><img src={telephone} alt="Icon" /></a>{" "}
                <span style={{ verticalAlign: "middle" }}>+91 8870481461</span>
              </div>
              <div className="social-icon">
                <div>
                  <a><img src={envelope} alt="Icon" /></a>{" "}
                  <span style={{ verticalAlign: "middle" }}>jebasuwinj@gmail.com</span>
                </div>
              </div>
            </div>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jeba-suwin-3a96b922b/">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://www.instagram.com/_smilling__face_/">
                <img src={navIcon3} alt="Icon" />
              </a>
              <a href="https://github.com/jebasuwin">
                <img src={navIcon4} alt="Icon" />
              </a>
            </div>
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved @Jeba Suwin</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
