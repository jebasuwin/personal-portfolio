import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/work.webp";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  // ✅ useMemo prevents re-creation of the array on each render
  const toRotate = useMemo(() => [
    "Full Stack Java Developer",
    "Software Developer"
  ], []);

  useEffect(() => {
    const tick = () => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (isDeleting) {
        setDelta((prevDelta) => prevDelta / 2);
      }

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };

    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text, delta, isDeleting, loopNum, toRotate]);

  const handleClick = () => {
    const connectSection = document.getElementById("connect");
    if (connectSection) {
      connectSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome back!</span>
                  <h1>
                    {`Hi! I'm Jeba Suwin, `}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Full Stack Java Developer", "Java Developer", "Software Developer"]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>Full-stack Software Developer with hands-on experience in building scalable web and mobile
applications using React, Spring Boot, and MySQL. Proven track record of delivering end-to-end
solutions, integrating modern UI/UX, and optimizing backend performance. Passionate about
innovation, continuous learning, and contributing to impactful, growth-driven projects.
</p>
                  <button onClick={handleClick}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
