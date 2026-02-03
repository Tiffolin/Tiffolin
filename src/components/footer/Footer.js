import React from "react";
import email from "../images/icon/email.png";
import github from "../images/icon/github.png";
import linkedIn from "../images/icon/linkedin.jpg";

const Footer = () => {
  return (
    <div id="footer" className="justify-content-md-center sections">
      <div id="copyright">
        <a href="https://www.tiffolin.com">
          <div id="developer">
            © 2020, images & web designed by TiffoLin
          </div>
        </a>
      </div>

      <p className="footerText">Find me on:</p>

      <div id="snsContainer">
        <a href="https://github.com/Tiffolin?tab=repositories">
          <img src={github} className="snsImg img-fluid" alt="GitHub" />
        </a>

        <a href="mailto:szuchinlin3@gmail.com">
          <img src={email} className="snsImg img-fluid" alt="Email" />
        </a>

        <a href="https://www.linkedin.com/in/szuchinlin">
          <img src={linkedIn} className="snsImg img-fluid" alt="LinkedIn" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
