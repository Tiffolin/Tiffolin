import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style.css";
import profile from "../images/shadowImages/5.PNG";

function About() {
    return (       
        <div id="about" className="justify-content-md-center sections">
             <Row>
             <p className="pageTitle">ABOUT TIFFO LIN 。我</p>
            <Col lg={6} md={12} id="aboutImgContainer">
                <img alt="boss5" src={profile} className="pictures2 img-fluid" ></img>
            </Col>
            <Col lg={6} md={12}>
                    <p className="info col-12 aboutinfo">

                    <p>I'm a snowboard enthusist as well as a Full-Stack Web Developer with a keen eye for design, innovation, and creative solutions.</p>
                    <br></br>
                    <p>Coming from a background of various profession in multiple countries (i.e. South Africa, Taiwan, Japan, New Zealand, Canada),
                       I'm able to incorporated ideals & skills gained from each culture into creative solutions or innovations to better suite the global audience of today.</p>
                       <br></br>
                       <br></br>
                    <p className="pageTitle">SKILLS</p>
                        <span className="skills">ReactJS</span>
                        <span className="skills">。HTML5</span>
                        <span className="skills">。SASS</span>
                        <span className="skills">。CSS3</span>
                        <span className="skills">。Bootstrap</span>
                        <span className="skills">。Handlebar</span>
                        <span className="skills">。JavaScript</span>
                        <span className="skills">。JQuery</span>
                        <span className="skills">。API</span>
                        <span className="skills">。Git</span>
                        <span className="skills">。Heroku</span>
                        <span className="skills">。NodeJS</span>
                        <span className="skills">。Express</span>
                        <span className="skills">。Sequelize</span>
                        <span className="skills">。MySQL</span>
                        <span className="skills">。Mongo</span>
                        <span className="skills">。Firebase 。</span>
                        {/* <span className="learn"></span> */}
                </p>
            </Col>
            <Col lg={12}>
                <br></br>
                <br></br>
            <p className="learn">Being able to learn on the job is one of my strengths. I am always willing and excited to learn new technologies/frameworks</p>
            </Col>
                       
            </Row>
        </div>
  
    )
}

export default About;