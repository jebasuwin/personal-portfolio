import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import FormfacadeEmbed from "@formfacade/embed-react";

export const Contact = () => {

  const handleFormSubmit = () => {
    console.log('Form submitted');
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img 
                  className={isVisible ? "animate__animated animate__zoomIn" : ""} 
                  src={contactImg} 
                  alt="Contact Us" 
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div id="ff-compose">
                    <FormfacadeEmbed
                      formFacadeURL="https://formfacade.com/include/101385643966515289543/form/1FAIpQLSfiRH4pLrPlQ0SMYesDLW5UtkzvIski4WM4rlE29TBZnO1bOg/classic.js/?div=ff-compose"
                      onSubmitForm={handleFormSubmit}
                    />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
