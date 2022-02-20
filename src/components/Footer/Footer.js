import styles from "./Footer.module.scss";
import { IconButton } from "@mui/material";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.content}>
        <h4>shall we chat?</h4>
        <h1>
          Let's talk about your
          <br /> business?
        </h1>
        <div className={styles.hline}></div>
        <p>
          It is a long established fact that a reader willl be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className={styles.socialLinks}>
          <IconButton className={styles.socialIcon}>
            <IoCall color="white" />
          </IconButton>
          <IconButton className={styles.socialIcon}>
            <IoLogoFacebook color="white" />
          </IconButton>
          <IconButton className={styles.socialIcon}>
            <AiFillInstagram color="white" />
          </IconButton>
          <IconButton className={styles.socialIcon}>
            <IoLogoWhatsapp color="white" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
