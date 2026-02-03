import React from "react";
import { Row, Col } from "react-bootstrap";

import profileImage from "../images/profile2.png";

const About = () => {
  return (
    <div className= "page">
    <section className="about">
      <Row className="about__row align-items-center">
        <Col lg={12}>
          <h2 className="about__title">
            ABOUT TIFFO LIN <span className="about__title-accent">。我</span>
          </h2>
        </Col>

        <Col lg={6} md={12} className="about__image-col">
          <img
            src={profileImage}
            alt="Portrait of Tiffo Lin"
            className="about__image img-fluid"
          />
        </Col>

        <Col lg={6} md={12} className="about__content">
          <p className="about__paragraph">
            My background spans office administration, creative work, and life
            abroad.
          </p>

          <p className="about__paragraph">
            I’ve lived and worked in five countries, taught snowboarding, and
            spent years in office environments where organization and attention
            to detail weren’t optional—they were essential. Today, I work with
            web development and video editing, supported by a strong
            administrative foundation.
          </p>

          <p className="about__paragraph">
            I enjoy creating clean, well-organized digital experiences, fixing
            things that somehow broke, and making systems run a little smoother
            than they did yesterday.
          </p>
        </Col>

        <Col lg={12}>
          <p className="about__tagline">
            Organized by nature, curious by default, and always improving the
            details—one fix at a time.
          </p>
        </Col>
      </Row>
    </section>
    </div>
  );
};

export default About;
