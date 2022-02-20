// import React from 'react'
import clsx from "clsx";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <ul className={clsx(styles.navItems, styles.leftNav)}>
        <li className={styles.navItem}>
          <Link to="/">Option1</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/">Option2</Link>
        </li>
      </ul>
      <ul className={clsx(styles.navItems, styles.rightNav)}>
        <li className={styles.navItem}>
          <Link to="/about">About Us</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/#contact">Contact</Link>
        </li>
        <li className={styles.navItem}>
          <Link to="/#faq">FAQ</Link>
        </li>
      </ul>
      <div className={styles.burgerMenu}>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </div>
    </nav>
  );
};

export default Navbar;
