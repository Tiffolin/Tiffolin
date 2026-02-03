import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../images/lin.png"; // adjust if needed
import github from "../images/icon/github.png";
import email from "../images/icon/email.png";
import linkedIn from "../images/icon/linkedin.jpg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // show navbar only AFTER splash height
      const splashHeight = window.innerHeight * 0.9;
      setScrolled(window.scrollY > splashHeight);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!scrolled) return null; // 🔥 key line: navbar hidden on splash

  return (
    <nav className="nav scrolled">
      <div className="nav_text">

        {/* Logo */}
        <NavLink to="/">
          <img src={logo} id="logo" alt="logo" />
        </NavLink>

        {/* Navigation links */}
        <NavLink to="/about" className="navLinks">
          About
        </NavLink>

        <NavLink to="/videos" className="navLinks">
          Videos
        </NavLink>

        <NavLink to="/webdesigns" className="navLinks">
          Web
        </NavLink>

        <NavLink to="/appprojects" className="navLinks">
          Apps
        </NavLink>

        {/* Social icons */}
        <a
          href="https://github.com/Tiffolin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="NavSnsImg" alt="GitHub" />
        </a>

        <a href="mailto:szuchinlin3@gmail.com">
          <img src={email} className="NavSnsImg" alt="Email" />
        </a>

        <a
          href="https://www.linkedin.com/in/szuchinlin"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedIn} className="NavSnsImg" alt="LinkedIn" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
