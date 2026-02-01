import React, { Component } from "react";
import {NavLink} from "react-router-dom";
import logo from "../images/name1.png";
import email from "../images/icon/email.png";
import github from "../images/icon/github.png";
import linkedIn from "../images/icon/linkedin.jpg";
import "../style.css";

class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    const isTop = window.scrollY < 100;
    if (!isTop) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return (
      <div className={this.state.scrolled ? "nav scrolled" : "nav"}>
        <div className="nav_text">
          <NavLink to="/Tiffolin">
            <img id="logo" alt="logo" src={logo} />
          </NavLink>

          <a href="https://github.com/Tiffolin?tab=repositories">
            <span>
              <img src={github} className="NavSnsImg img-fluid" alt="GitHub" />
            </span>
          </a>

          <a href="mailto:szuchinlin3@gmail.com">
            <span>
              <img src={email} className="NavSnsImg img-fluid" alt="Email" />
            </span>
          </a>

          <a href="https://www.linkedin.com/in/szuchinlin">
            <span>
              <img src={linkedIn} className="NavSnsImg img-fluid" alt="LinkedIn" />
            </span>
          </a>
        </div>
      </div>
    );
  }
}


export default Navbar;