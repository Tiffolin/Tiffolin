import React from "react";
import { Row, Col } from "react-bootstrap";

import logoImage from "../images/name.png";
import heroImage from "../images/sb.png";


const snowLayers = [
  "splash__snow--one",
  "splash__snow--two",
  "splash__snow--three",
  "splash__snow--four",
  "splash__snow--five",
];

const Splash = () => {
  return (
    <div className= "page">
    <section className="splash">
      <Row className="splash__row align-items-center justify-content-center">
        <Col lg={5} md={12} className="splash__image-col">
          <img
            src={logoImage}
            alt="Name logo"
            className="splash__image splash__image--logo img-fluid"
          />
        </Col>

        <Col lg={4} md={12} className="splash__image-col">
          <img
            src={heroImage}
            alt="Hero graphic"
            className="splash__image splash__image--hero img-fluid"
          />
        </Col>

       {/* <Col lg={0} md={12} className="splash__image-col">
          <img
            src={profileImage}
            alt="Profile illustration"
            className="splash__image splash__image--profile img-fluid"
          />
        </Col>*/}
      </Row>

      {/* Snow animation layers */}
      <div className="splash__snow">
        {snowLayers.map((layer, index) => (
          <div key={index} className={`splash__snow-layer ${layer}`} />
        ))}
      </div>
    </section>
    </div>
  );
};

export default Splash;
