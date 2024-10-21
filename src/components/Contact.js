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

formFacadeURL="https://formfacade.com/include/106630070652424110910/form/1FAIpQLSe3_8q87C2sufWKe4aT3Qp4ruUq-f3SVrHuxm6k-_pHarg7xg/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

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
