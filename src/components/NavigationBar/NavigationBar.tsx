import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// icons
import { FaBars } from 'react-icons/fa';
import { GoHomeFill } from 'react-icons/go';
import { BiSolidTimeFive } from 'react-icons/bi';
import { FaHandcuffs } from 'react-icons/fa6';
import { GiWhiteBook } from 'react-icons/gi';
import { AiFillHeart } from 'react-icons/ai';
import { PiTelevisionSimpleFill } from 'react-icons/pi';
import { GiTargetShot } from 'react-icons/gi';
// scss
import './NavigationBar.scss';

const NavigationBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);


  return (
    <div className={`navbar-container ${(isMenuOpen) ? 'hidenext': ''}`}>
      <div className="logo">
        <div className='menu-icon'>
          <FaBars className="menu-icon" onClick={toggleMenu} />
        </div>
        <div className='logo-icon'>
          <img src='\logo.png' width='30' alt='flag'></img>
        </div>
        <div className='logo-text'>Stand with Palestine</div>
      </div>
      <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className={`nav-item ${location.pathname === '/' ? 'selected' : ''}`}>
            <Link to="/"><GoHomeFill style={{ margin: '0px', paddingRight: '0.1rem' }} /> Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/status' ? 'selected' : ''}`}>
            <Link to="/status"><GiTargetShot style={{ margin: '-1px', paddingRight: '0.1rem' }} /> Status</Link>
          </li>
          <li className={`nav-item dropdown`}>
            <span className={`${location.pathname.includes('timeline')? 'selected' : ''}`}><BiSolidTimeFive style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Timeline</span>
            <ul className="dropdown-list">
              <li className={`nav-item`}>
                <Link to="/timeline/historic">Current Timeline</Link>
              </li>
              <li className={`nav-item`}>
                <Link to="/timeline/recent">Recent Timeline</Link>
              </li>
            </ul>
          </li>
          <li className={`nav-item ${location.pathname === '/crimes' ? 'selected' : ''}`}>
            <Link to="/crimes"><FaHandcuffs style={{ margin: '-1px', paddingRight: '0.1rem' }} /> Crimes</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/lies' ? 'selected' : ''}`}>
            <Link to="/lies"><PiTelevisionSimpleFill style={{ margin: '-3px', paddingRight: '0.1rem' }} /> Lies</Link>
          </li>
          <li className={`nav-item dropdown`}>
            <span className={`${location.pathname.includes('history')||location.pathname.includes('interview') ? 'selected' : ''}`}><GiWhiteBook style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Blogs</span>
            <ul className="dropdown-list">
              <li className={`nav-item`}>
                <Link to="/blogs/history">History Of Occupation</Link>
              </li>
              <li className={`nav-item`}>
                <Link to="/blogs/interviews">Interviews</Link>
              </li>
            </ul>
          </li>
          <li className={`nav-item ${location.pathname === '/support' ? 'selected' : ''}`}>
            <Link to="/support"><AiFillHeart style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
