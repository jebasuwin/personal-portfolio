import React from "../assets/img/react.png";
import html from "../assets/img/html&css.png";
import wordpress from "../assets/img/wordpress.png";
import spring from "../assets/img/spring.png";
import testing from "../assets/img/testing.png";
import java from "../assets/img/java.png";
import web from "../assets/img/web.png";
import git from "../assets/img/git.png";
import sql from "../assets/img/sql.png";
import javascript from "../assets/img/javascript.png";
import bootstrap from "../assets/img/bootstrap.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn" style={{marginTop: '50px'}}>
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                transitionDuration={700}
                keyBoardControl={true}
                arrows={true}
                pauseOnHover={false}
                removeArrowOnDeviceType={[]} 
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={React} alt="ReactJs" />
                  <h5>ReactJs</h5>
                </div>
                <div className="item">
                  <img src={spring} alt="SpringBoot" />
                  <h5>SpringBoot</h5>
                </div>
                <div className="item">
                  <img src={wordpress} alt="Wordpress" />
                  <h5>WordPress</h5>
                </div>
                <div className="item">
                  <img src={web} alt="Web Development" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={java} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={sql} alt="Java" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={git} alt="Java" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src={html} alt="HTML & CSS" />
                  <h5>HTML & CSS</h5>
                </div>
                <div className="item">
                  <img src={javascript} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={testing} alt="Testing" />
                  <h5>Testing</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="Bootstrap" />
                  <h5>Bootstrap</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
};
