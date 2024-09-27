import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have completed various projects in both frontend and backend development, utilizing React for the frontend and Spring Boot for the backend.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
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
                        Frontend-Backend Synergy: Built a dynamic frontend with ReactJS and integrated it with a robust Java Spring Boot backend, enabling real-time data interaction and seamless user experience.<br></br>
                      <a href="https://drive.google.com/file/d/1sG5UMEkr3sSgCN-TELnsMrdsBtaq23L0/view" target="_blank">
                      Project Link
                      </a>
                      </li>
                      {/* <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row> */}
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <li>
                        Creating a grocery website using HTML and CSS involves designing a user-friendly interface to display various grocery products, categories, and pricing.
                      </li>
                      <li>
                        HTML is used for structuring the web content, while CSS is utilized for styling and layout.
                      </li>
                      <li>
                      Used JavaScript for dynamic features, improving real-time searches, seamless shopping, and overall website interactivity.<br></br>
                      <a href="https://grocerywebsitee.netlify.app/" target="_blank">
                      Project Link
                      </a>                     
                      </li>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <li>
                        A Bus Reservation Project with JDBC involves creating a software system that allows users to search for and reserve bus tickets.
                      </li>
                      <li>
                        It connects to a database to store and retrieve information, providing a seamless and efficient way for customers to book their journeys.<br></br>
                      <a href="https://github.com/jebasuwin/BusReservation/tree/main/BusResv" target="_blank">
                      Project Link
                      </a>
                      </li>                    
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}