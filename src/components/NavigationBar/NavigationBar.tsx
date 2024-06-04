import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
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
import Image from 'next/image';

interface NavBarProps {
  showMobNav: boolean;
  setShowMobNav: (showMobNav: boolean) => void;
}

const NavigationBar: React.FC<NavBarProps> = ({ showMobNav, setShowMobNav }) => {
  const pathname = usePathname();

  const toggleMenu = () => {
    setShowMobNav(!showMobNav);
  };



  useEffect(() => {
    setShowMobNav(false);
  }, [pathname]);


  return (
    <div className={`navbar-container ${(showMobNav) ? 'hidenext' : ''} ${(pathname === '/') ? 'navbar-container-home' : ''}`}>
      <div className="logo">
        <div className='menu-icon' onClick={toggleMenu}>
          <FaBars className="menu-icon" />
        </div>
        <div className='logo-container'>
          <div className='logo-icon'>
            <Image src='/logo.png' width={30} height={30} alt='flag' />
          </div>
          <Link href="./">
            <div className='logo-text'>Stand With Palestine</div>
          </Link>
        </div>
      </div>
      <nav className={`navbar ${showMobNav ? 'active' : ''}`}>
        <ul className="nav-list">
          <li className={`nav-item ${pathname === '/' ? 'selected' : ''}`}>
            <Link href="./"><GoHomeFill style={{ margin: '0px', paddingRight: '0.1rem' }} /> Home</Link>
          </li>
          <li className={`nav-item ${pathname === '/status' ? 'selected' : ''}`}>
            <Link href="/status"><GiTargetShot style={{ margin: '-1px', paddingRight: '0.1rem' }} /> Status</Link>
          </li>
          <li className={`nav-item ${pathname.includes('timeline') ? 'selected' : ''}`}>
            <Link href="/timeline/recent"><BiSolidTimeFive style={{ margin: '-1px', paddingRight: '0.1rem' }} />Timeline</Link>
            {/* <span className={`${pathname.includes('timeline')? 'selected' : ''}`}><BiSolidTimeFive style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Timeline</span>
            <ul className="dropdown-list">
              <li className={`nav-item`}>
                <Link href="/timeline/historic">Historic Timeline</Link>
              </li>
              <li className={`nav-item`}>
                <Link href="/timeline/recent">Conflict Timeline</Link>
              </li>
            </ul> */}
          </li>
          <li className={`nav-item ${pathname === '/crimes' ? 'selected' : ''}`}>
            <Link href="/crimes"><FaHandcuffs style={{ margin: '-1px', paddingRight: '0.1rem' }} /> Crimes</Link>
          </li>
          <li className={`nav-item ${pathname === '/lies' ? 'selected' : ''}`}>
            <Link href="/lies"><PiTelevisionSimpleFill style={{ margin: '-3px', paddingRight: '0.1rem' }} /> Lies</Link>
          </li>
          <li className={`nav-item ${pathname === '/intents' ? 'selected' : ''}`}>
            <Link href="/intents"><FaQuoteLeft style={{ margin: '-3px', paddingRight: '0.1rem' }} /> Intents</Link>
          </li>
          <li className={`nav-item ${pathname.includes('/blogs') ? 'selected' : ''}`}>
            <Link href="/blogs"><GiWhiteBook style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Blogs</Link>
          </li>
          <li className={`nav-item ${pathname === '/support' ? 'selected-support' : ''}`}>
            <Link href="/support"><AiFillHeart style={{ margin: '-2px', paddingRight: '0.1rem' }} /> Support</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
