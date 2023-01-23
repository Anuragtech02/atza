import styles from "./Footer.module.scss";
import { IconButton } from "@mui/material";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.content}>
        <h4>shall we chat?</h4>
        <h1>
          Let&apos;s talk about your
          <br /> business?
        </h1>
        <div className={styles.hline}></div>
        {/* <p>
          It is a long established fact that a reader willl be distracted by the
          readable content of a page when looking at its layout.
        </p> */}
        <div className={styles.socialLinks}>
          <IconButton className={styles.socialIcon} href="tel:+918076249355">
            <IoCall color="white" />
          </IconButton>
          <IconButton
            className={styles.socialIcon}
            href="https://www.facebook.com/atzaforbiz/"
            target="_blank"
          >
            <IoLogoFacebook color="white" />
          </IconButton>
          <IconButton
            className={styles.socialIcon}
            href="https://instagram.com/atzaforbiz"
            target="_blank"
          >
            <AiFillInstagram color="white" />
          </IconButton>
          <IconButton
            className={styles.socialIcon}
            href="https://api.whatsapp.com/send/?phone=%2B918076249355&text=Hey,+I+am+Interested+in+Some+of+Your+Services+For+My+Business"
            target="_blank"
          >
            <IoLogoWhatsapp color="white" />
          </IconButton>
          <IconButton
            className={styles.socialIcon}
            href="https://www.linkedin.com/company/atzaforbiz"
            target="_blank"
          >
            <IoLogoLinkedin color="white" />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
