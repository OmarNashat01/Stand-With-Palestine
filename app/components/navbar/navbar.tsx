import Image from "next/image";
import Link from "next/link";

import styles from "./navbar.module.scss";
import logo from "../../../public/images/logo.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link href="/" className={styles.navbar_logo__link}>
          <Image src={logo} alt="Logo" height="75" />
        </Link>
      </div>

      <div className={styles.navbar_links}>
        <Link href="/blog">Blog</Link>

        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>Statistics</button>
          <div className={styles.subnav_content}>
            <Link href="/numbers">Numbers Don&apos;t Lie</Link>
            <Link href="/map">A Map of Blood</Link>
          </div>
        </div>

        <div className={styles.subnav}>
          <button className={styles.subnavbtn}>History of Crimes</button>
          <div className={styles.subnav_content}>
            <Link href="/history">The Complete Story</Link>
            <Link href="/crimes">Crimes & Violations</Link>
          </div>
        </div>

        <Link href="/media">The Media Game</Link>
      </div>
    </nav>
  );
};

export default Navbar;
