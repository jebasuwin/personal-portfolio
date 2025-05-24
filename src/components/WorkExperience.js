import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import newLogo from '../assets/img/ttlogo.png';


export const WorkExperience = () => {

  return (
    <section className="project" id="workExperience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Work Experience</h2>
                <div className="text-center">
                <img src={newLogo} alt="Company Logo" style={{ width: '150px' }} />
                </div>
                <p>Working as a Full Stack Developer<br></br>
                Aug 2024 - Present</p>
                {/* <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Employee<br></br> Management<br></br> System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second" >Grocery Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Bus Reservation<br></br> System</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <li>
                        Full Stack Application: Developed a comprehensive Employee Management System with interactive web pages for browsing, updating, and managing employee data using Java, Spring Boot, and MySQL for backend functionality.
                      </li>
                      <li>
                        User Registration & Database Integration: Implemented secure user registration and efficient database handling with Spring Boot and MySQL, ensuring smooth user data storage and retrieval.
                      </li>
                      <li>
                        CRUD Operations: Designed responsive web pages using ReactJS, HTML, CSS, and Bootstrap to support Create, Read, Update, and Delete (CRUD) operations for employee management.
                      </li>
                      <li>
                        Frontend-Backend Synergy: Built a dynamic frontend with ReactJS and integrated it with a robust Java Spring Boot backend, enabling real-time data interaction and seamless user experience.
                      </li>
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container> */}
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}