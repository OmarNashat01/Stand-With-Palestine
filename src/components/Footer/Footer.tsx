import React from "react";
import "./Footer.scss";
import { useNavigate } from "react-router-dom";
interface FooterProps {
  title: string;
  subTitle: string;
  boldSubTitle: string;
}

const Footer: React.FC<FooterProps> = ({ title, subTitle, boldSubTitle }) => {
  const navigate = useNavigate();
  const link = "stand-with-palestine.org";
  const text =
    "Learn more about the latest news, the status of Gaza, Israeli war crimes, and misinformation about the ongoing massacre in Gaza. Support Palestine!";
  return (
    <div className="real-footer">
      <footer>
        <div className="footer-content">
          <h3>{title}</h3>
          <p>{subTitle}</p>
          <p style={{ fontWeight: "bold" }}>{boldSubTitle}</p>
          <ul className="socials">
            <li>
              <a
                href={`https://twitter.com/intent/tweet?url=${link}&text=${text}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 All Rights Reserved.</p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <a onClick={() => navigate("./")}>Home</a>
              </li>
              <li>
                <a onClick={() => navigate("./timeline/recent")}>Timeline</a>
              </li>
              <li>
                <a onClick={() => navigate("./crimes")}>Crimes</a>
              </li>
              <li>
                <a onClick={() => navigate("./lies")}>Lies</a>
              </li>
              <li>
                <a onClick={() => navigate("./blogs")}>Blogs</a>
              </li>
              <li>
                <a onClick={() => navigate("./support")}>Support</a>
              </li>
            </ul>
          </div>
          <p >
              <a href="mailto:support@stand-with-palestine.org">Got Feedback? Contact Us</a>
            </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
