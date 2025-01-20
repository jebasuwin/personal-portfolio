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
                <br></br>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">AKHerbs<br></br>Ecommerce<br></br>Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      
                      <Nav.Link eventKey="second">Auth<br></br>Login<br></br>Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third" >Ecommerce<br></br>Website</Nav.Link>
                    </Nav.Item>
                    
                    
                  </Nav>

                  

                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      
                      <Nav.Link eventKey="fourth">Grocery<br></br>Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="fifth">Bus Reservation<br></br> System</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="sixth">Employee<br></br>Management<br></br>System</Nav.Link>
                    </Nav.Item>
                    
                    
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <li>
                      The AkHerbs eCommerce website is designed to showcase a curated selection of herbal products in a visually appealing and user-friendly layout.
                    </li>
                    <li>
                      It focuses on delivering a seamless shopping experience with intuitive navigation, optimized product categorization, and mobile responsiveness.
                    </li>
                    <li>
                      The WooCommerce-powered structure ensures efficient product management, secure payment gateways, and a reliable backend for handling orders and inventory.
                    </li>
                    <li>
                      Developed on WordPress using WooCommerce, the website integrates customizable themes and plugins to enhance functionality and user experience.<br></br>
                      <a href="https://www.akherbs.in" target="_blank">
                        Project Link
                      </a>
                    </li>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                                            <li>
                          Secure Authentication System: Developed a robust authentication mechanism using JWT tokens with Spring Boot, ensuring secure and seamless user login and session management.
                        </li>
                        <li>
                          User Registration & Login: Implemented a user-friendly registration and login system, integrating password encryption and backend validation for secure data handling.
                        </li>
                        <li>
                          Token-Based Authorization: Designed a system where only authenticated users with valid JWT tokens can access protected endpoints, enhancing security and access control.
                        </li>
                        <li>
                          Product Management with CRUD Operations: Built a feature-rich product management module enabling authenticated users to perform Create, Read, Update, and Delete (CRUD) operations on product data via a ReactJS frontend and Spring Boot backend.
                        </li>
                        <li>
                          Frontend-Backend Integration: Seamlessly connected the ReactJS-based frontend with the Spring Boot backend, providing real-time interaction, efficient data handling, and a smooth user experience.<br></br>
                          <a href="https://github.com/jebasuwin/Auth-Login-Register" target="_blank">
                            Project Link
                          </a>
                        </li>

                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <li>
                      This model textile eCommerce website is designed to showcase a curated selection of textile products in a visually appealing layout.
                      </li>
                      <li>
                      It focuses on delivering a smooth user experience with intuitive navigation and responsive design. 
                      </li>
                      <li>
                      The static structure ensures fast loading times, making it ideal for displaying product collections effectively across devices.
                      </li>
                      <li>
                        Frontend-Backend Synergy: Built a dynamic frontend with ReactJS and integrated it with a robust Java Spring Boot backend, enabling real-time data interaction and seamless user experience.<br></br>
                      <a href="https://jebasuwin.github.io/Textile--Ecommerce/" target="_blank">
                      Project Link
                      </a>
                      </li>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="fifth">
                      
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
                      <Tab.Pane eventKey="fourth">
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="sixth">
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
                      </Tab.Pane>
                      
                      <Tab.Pane eventKey="fourth">
                      
                      <li>
                      Developed a "Grocery Website" using HTML and CSS, focusing on a clean design, intuitive navigation, and mobile-friendly responsiveness for a seamless user experience across all devices.
                      <a href="https://github.com/jebasuwin/GroceryProjects" target="_blank">
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