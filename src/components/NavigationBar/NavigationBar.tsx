import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaQuoteLeft } from "react-icons/fa";
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

interface NavBarProps {
  showMobNav: boolean;
  setShowMobNav: (showMobNav: boolean) => void;
}

const NavigationBar: React.FC<NavBarProps> = ({showMobNav, setShowMobNav}) => {
  const location = useLocation();

  const toggleMenu = () => {
    setShowMobNav(!showMobNav);
  };



  useEffect(() => {
    setShowMobNav(false);
  }, [location.pathname]);


  return (
    <div className={`navbar-container ${(showMobNav) ? 'hidenext': ''} ${(location.pathname === '/') ? 'navbar-container-home':''}`}>
      <div className="logo">
        <div className='menu-icon'  onClick={toggleMenu}>
          <FaBars className="menu-icon" />
        </div>
        <div className='logo-container'>
          <div className='logo-icon'>
           <img src='\logo.png' width='30' alt='flag'></img>
          </div>
          <Link to="./">
          <div className='logo-text'>Stand With Palestine</div>
          </Link>
        </div>
      </div>
      <nav className={`navbar ${showMobNav ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className={`nav-item ${location.pathname === '/' ? 'selected' : ''}`}>
            <Link to="./"><GoHomeFill style={{ margin: '0px', paddingRight: '0.1rem' }} /> Home</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/status' ? 'selected' : ''}`}>
            <Link to="/status"><GiTargetShot style={{ margin: '-1px', paddingRight: '0.1rem' }} /> Status</Link>
          </li>
          <li  className={`nav-item ${location.pathname.includes('timeline')? 'selected' : ''}`}>
          <Link to="/timeline/recent"><BiSolidTimeFive style={{ margin: '-1px', paddingRight: '0.1rem' }} />Timeline</Link>
            {/* <span className={`${location.pathname.includes('timeline')? 'selected' : ''}`}><BiSolidTimeFive style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Timeline</span>
            <ul className="dropdown-list">
              <li className={`nav-item`}>
                <Link to="/timeline/historic">Historic Timeline</Link>
              </li>
              <li className={`nav-item`}>
                <Link to="/timeline/recent">Conflict Timeline</Link>
              </li>
            </ul> */}
          </li>
          <li className={`nav-item ${location.pathname === '/crimes' ? 'selected' : ''}`}>
            <Link to="/crimes"><FaHandcuffs style={{ margin: '-1px', paddingRight: '0.1rem' }} /> Crimes</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/lies' ? 'selected' : ''}`}>
            <Link to="/lies"><PiTelevisionSimpleFill style={{ margin: '-3px', paddingRight: '0.1rem' }} /> Lies</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/intents' ? 'selected' : ''}`}>
            <Link to="/intents"><FaQuoteLeft style={{ margin: '-3px', paddingRight: '0.1rem' }} /> Intents</Link>
          </li>
          <li className={`nav-item ${location.pathname.includes('/blogs') ? 'selected' : ''}`}>
            <Link to="/blogs"><GiWhiteBook style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Blogs</Link>
          </li>
          <li className={`nav-item ${location.pathname === '/support' ? 'selected-support' : ''}`}>
            <Link to="/support"><AiFillHeart style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
