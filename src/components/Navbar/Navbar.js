// import React from 'react'
import clsx from "clsx";
import styles from "./Navbar.module.scss";
import logo from "@/assets/atza-dark-logo.png";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <ul className={clsx(styles.navItems, styles.leftNav)}>
          <li className={styles.navItem}>
            <Link href="/">
              <Image src={logo} alt="logo" width={80} />
            </Link>
          </li>
          {/* <li className={styles.navItem}>
          <Link href="/">Option2</Link>
        </li> */}
        </ul>
        <ul className={clsx(styles.navItems, styles.rightNav)}>
          <li className={styles.navItem}>
            <Link href="/#">Contact Us</Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">About Us</Link>
          </li>
        </ul>
        <div className={styles.burgerMenu}>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
          <div className={styles.burger}></div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
