import React, { useState } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { motion } from "framer-motion";
import colorSharp2 from "../assets/img/color-sharp2.png";
import '../App.css';

const projects = [
  {
    key: "akherbs",
    title: "AKHerbs Ecommerce",
    details: [
      "The AkHerbs eCommerce website showcases herbal products with a user-friendly layout.",
      "Seamless shopping experience with optimized navigation and mobile responsiveness.",
      "Built on WordPress WooCommerce for secure payments and reliable backend.",
      'Visit: <a href="https://www.akherbs.in" target="_blank" rel="noreferrer">akherbs.in</a>',
    ],
  },
  {
    key: "authsystem",
    title: "Auth System",
    details: [
      "Secure JWT Authentication with Spring Boot backend.",
      "User Registration, Login, and Authorization with protected routes.",
      "CRUD operations on products using React + Spring Boot.",
      'Source code: <a href="https://github.com/jebasuwin/Auth-Login-Register" target="_blank" rel="noreferrer">GitHub</a>',
    ],
  },
  {
    key: "textile",
    title: "Textile Ecommerce",
    details: [
      "Showcases textile products in a responsive static site.",
      "Frontend React, backend Spring Boot.",
      'Live demo: <a href="https://jebasuwin.github.io/Textile--Ecommerce/" target="_blank" rel="noreferrer">Project Link</a>',
    ],
  },
  {
    key: "grocery",
    title: "Grocery Website",
    details: [
      "Simple responsive grocery website with HTML & CSS.",
      'Repo: <a href="https://github.com/jebasuwin/GroceryProjects" target="_blank" rel="noreferrer">GitHub</a>',
    ],
  },
  {
    key: "akherbs",
    title: "AKHerbs Ecommerce",
    details: [
      "The AkHerbs eCommerce website showcases herbal products with a user-friendly layout.",
      "Seamless shopping experience with optimized navigation and mobile responsiveness.",
      "Built on WordPress WooCommerce for secure payments and reliable backend.",
      'Visit: <a href="https://www.akherbs.in" target="_blank" rel="noreferrer">akherbs.in</a>',
    ],
  },
  {
    key: "authsystem",
    title: "Auth System",
    details: [
      "Secure JWT Authentication with Spring Boot backend.",
      "User Registration, Login, and Authorization with protected routes.",
      "CRUD operations on products using React + Spring Boot.",
      'Source code: <a href="https://github.com/jebasuwin/Auth-Login-Register" target="_blank" rel="noreferrer">GitHub</a>',
    ],
  },
  {
    key: "textile",
    title: "Textile Ecommerce",
    details: [
      "Showcases textile products in a responsive static site.",
      "Frontend React, backend Spring Boot.",
      'Live demo: <a href="https://jebasuwin.github.io/Textile--Ecommerce/" target="_blank" rel="noreferrer">Project Link</a>',
    ],
  },
  {
    key: "grocery",
    title: "Grocery Website",
    details: [
      "Simple responsive grocery website with HTML & CSS.",
      'Repo: <a href="https://github.com/jebasuwin/GroceryProjects" target="_blank" rel="noreferrer">GitHub</a>',
    ],
  },
];

export const Projects = () => {
  const [activeKey, setActiveKey] = useState(projects[0].key);

  const selectedProject = projects.find((p) => p.key === activeKey);

  return (
    <section
      id="projects"
      className="project min-vh-100 py-5 position-relative text-white"
      style={{
        backgroundImage: `url(${colorSharp2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
          zIndex: 0,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 10 }}>
        <motion.h2
          className="text-center mb-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>

        {/* Scrollable pills wrapper */}
        <div
  style={{
    display: "flex",
    flexWrap: "wrap", // allow wrapping on smaller screens
    justifyContent: "center",
    rowGap: "10px",
    columnGap: "10px",
    marginBottom: "20px",
  }}
>

          <Nav
            variant="pills"
            activeKey={activeKey}
            onSelect={(k) => setActiveKey(k)}
            style={{ display: "inline-flex" }}
          >
            {projects.map(({ key, title }) => (
              <Nav.Item key={key} style={{ display: "inline-block", margin: "0 10px" }}>
                <Nav.Link className="nav-link-custom"
                  eventKey={key} 
                  style={{
                    cursor: "pointer",
                    fontWeight: activeKey === key ? "700" : "700",
                    fontSize: "1.1rem",
                    color: activeKey === key ? "#fff" : "#fff",
                    whiteSpace: "normal", // allow wrapping if needed
                     border: "none",
                  }}
                >
                  {title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </div>

        <Row className="justify-content-center">
          <Col md={8}>
            <motion.div
              key={selectedProject.key}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 p-4 rounded-3 shadow-lg"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <h3 className="mb-3">{selectedProject.title}</h3>
              <ul
                className="list-unstyled"
                style={{ lineHeight: "1.6", fontSize: "1.1rem" }}
              >
                {selectedProject.details.map((detail, i) => (
                  <li
                    key={i}
                    className="mb-2"
                    dangerouslySetInnerHTML={{ __html: detail }}
                  />
                ))}
              </ul>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};