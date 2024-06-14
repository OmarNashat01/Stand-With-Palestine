import React from "react";
import "./Footer.scss";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'

interface FooterProps {
  title: string;
  subTitle: string;
  boldSubTitle: string;
}

const Footer: React.FC<FooterProps> = ({ title, subTitle, boldSubTitle }) => {
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
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${link}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <p>Copyright © 2023 All Rights Reserved.</p>
          <div className="footer-menu">
            <ul className="f-menu">
              <li>
                <Link href="./">Home</Link>
              </li>
              <li>
                <Link href="./timeline/recent">Timeline</Link>
              </li>
              <li>
                <Link href="./crimes">Crimes</Link>
              </li>
              <li>
                <Link href="./lies">Lies</Link>
              </li>
              <li>
                <Link href="./blogs">Blogs</Link>
              </li>
              <li>
                <Link href="./support">Support</Link>
              </li>
            </ul>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <p >
              <a href="https://tally.so/r/mDNNKN">&nbsp;Collaborate &nbsp;&nbsp;</a>
            </p>
            <p >
              <a href="mailto:support@stand-with-palestine.org">Contact Us</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
