import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";
import Typewriter from "typewriter-effect";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import forYouImage from "../../assets/for-you.png";
import { Grid, IconButton } from "@mui/material";
import project1 from "../../assets/graphic.png";
import project2 from "../../assets/editing.png";
import project3 from "../../assets/event.png";
import project4 from "../../assets/ui-ux.png";

import bgHome from "../../assets/bg-test.jpg";

import tataLogo from "../../assets/logos/tata-logo.png";
import bigbasketLogo from "../../assets/logos/bigbasket-logo.png";
import nikeLogo from "../../assets/logos/nike-logo.png";
import comLogo from "../../assets/logos/com-logo.png";
import Carousel from "../../components/Carousel/Carousel";

import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaBeer } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const Home = () => {
  const projects = [
    { image: project1, title: "Graphic Design" },
    { image: project2, title: "Video Editing" },
    { image: project3, title: "Events" },
    { image: project4, title: "UI/UX Design" },
  ];

  const clients = [
    { logo: tataLogo, description: "" },
    { logo: bigbasketLogo, description: "" },
    { logo: nikeLogo, description: "" },
    { logo: comLogo, description: "" },
  ];

  return (
    <>
      <Navbar />
      <section className={styles.container}>
        <div className={styles.hero}>
          <h2>
            Looking for <TypeWriterComponent />? ATZA hai na!{" "}
          </h2>
          <p>
            Are you a Brand, Entrepreneur or Individual? <br />
            We've got solutions for everyone
          </p>
        </div>
        <img className={styles.bgImage} alt="bg-home" src={bgHome} />
        <div className={styles.featureCards}>
          <Grid
            container
            style={{
              width: "var(--fixed-width)",
              margin: "0 auto",
              position: "absolute",
              top: "-3rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {["YOU", "BIZ"].map((item, i) => (
              <Grid item md={6}>
                <div className={styles.card}>
                  <FeatureCard image={forYouImage} title={item} />
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
        <Portfolio projects={projects} />
        <Clients clients={clients} />
        <Footer />
      </section>
    </>
  );
};

export default Home;

const TypeWriterComponent = () => {
  return (
    <Typewriter
      options={{
        strings: ["Changing Text", "Video Editing", "Photoshoot"],
        autoStart: true,
        loop: true,
      }}
    />
  );
};

const Portfolio = ({ projects = [] }) => {
  return (
    <section className={styles.portfolio}>
      <h1>Portfolio</h1>
      <div className={styles.projects}>
        {/* <Grid container> */}
        {projects.map((project) => (
          <div className={styles.project}>
            <img src={project.image} alt={project.title} />
            <div className={styles.content}>
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
        {/* </Grid> */}
      </div>
    </section>
  );
};

const Clients = ({ clients = [] }) => {
  return (
    <section className={styles.clients}>
      <div className={styles.heading}>
        <h1>Clients</h1>
        <p>
          Established super brands and growing startups backed by top VC firms
          around india.
        </p>
      </div>
      <div className={styles.clientsSlider}>
        <Carousel>
          {clients.map((client) => (
            <div className={styles.client}>
              <img src={client.logo} alt={client.title} />
              {/* <div className={styles.content}>
              <h3>{client.title}</h3>
            </div> */}
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

const Footer = () => {
  const social = [
    {
      icon: <FaBeer color="white" />,
      link: "tel:+918888888888",
    },
    {
      icon: <FaBeer color="white" />,
      link: "https://www.facebook.com",
    },
    {
      icon: <FaBeer color="white" />,
      link: "https://www.instagram.com",
    },
    {
      icon: <FaBeer color="white" />,
      link: "https://www.whatsapp.com",
    },
  ];
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
