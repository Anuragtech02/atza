import Navbar from "../../components/Navbar/Navbar";
import styles from "./Home.module.scss";
import Typewriter from "typewriter-effect";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import forYouImage from "../../assets/for-you.png";
import { Grid } from "@mui/material";

const Home = () => {
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
            spacing={4}
            style={{ width: "var(--fixed-width)", margin: "0 auto" }}
          >
            {["YOU", "BIZ"].map((item, i) => (
              <Grid item md={6}>
                <FeatureCard image={forYouImage} title={item} />
              </Grid>
            ))}
          </Grid>
        </div>
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
