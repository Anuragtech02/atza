import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";
import Typewriter from "typewriter-effect";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import forYouImage from "../../assets/for-you.png";
import { Grid } from "@mui/material";
import project1 from "../../assets/graphic.png";
import project2 from "../../assets/editing.png";
import project3 from "../../assets/event.png";
import project4 from "../../assets/ui-ux.png";

import tataLogo from "../../assets/logos/tata-logo.png";
import bigbasketLogo from "../../assets/logos/bigbasket-logo.png";
import nikeLogo from "../../assets/logos/nike-logo.png";
import comLogo from "../../assets/logos/com-logo.png";
import Carousel from "../../components/Carousel/Carousel";

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
      <h1>Clients</h1>
      <p>
        Established super brands and growing startups backed by top VC firms
        around india.
      </p>
      <div className={styles.clients}>
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
