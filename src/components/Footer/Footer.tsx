import React from "react";
import "./Footer.scss";

interface FooterProps {
    title: string;
    subTitle: string;
    boldSubTitle: string;
  }
  

  const Footer: React.FC<FooterProps> = ({ title, subTitle, boldSubTitle }) => {
    return (
        <div className="real-footer">
    <footer>
      <div className="footer-content">
        <h3>{title}</h3>
        <p>{subTitle}</p>
        <p style={{ fontWeight: "bold" }}>{boldSubTitle}</p>
        <ul className="socials">
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-instagram"></i></a></li>
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin-square"></i></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 All Rights Reserved.</p>
        <div className="footer-menu">
          <ul className="f-menu">
            <li><a href="">Support</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Timeline</a></li>
            <li><a href="">Crimes</a></li>
            <li><a href="">Lies</a></li>
            <li><a href="">Blogs</a></li>
          </ul>
        </div>
      </div>
    </footer>
    </div>
  );
}

export default Footer;