import React from "react";
import linkedIn from "../images/LI-In-Bug.png";
import "../components/styles/Footer.scss";

const Footer = (): JSX.Element => {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/stuartpmcgee/" className="linkedIn">
        <div>Stuart Paul McGee &nbsp;</div>
        <img src={linkedIn} alt="LinkedIn logo" />
      </a>
      <div>&copy; 2023</div>
    </footer>
  );
};

export default Footer;
