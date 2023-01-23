import styles from "./About.module.scss";
import { Navbar, Footer } from "../../components";
import { IconButton } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import { FiArrowDown } from "react-icons/fi";
import working from "../../assets/bg-home.jpg";
import changeByDesignImage from "../../assets/bg/branding-bg.jpg";
import rhombushapedGird from "../../assets/bg/portfolio-pattern.png";
import limewitLogo from "../../assets/logos/limewit-logo.png";
import logo from "../../assets/icons/phone.png";

const About = () => {
  const missionContent = [
    {
      heading: "Philosophy",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab aliquam accusamus repudiandae alias laudantium dolor nihil corrupti qui esse quasi delectus ratione harum ex, rerum maiores cupiditate. Inventore, unde.",
    },
    {
      heading: "Mission",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ab aliquam accusamus repudiandae alias laudantium dolor nihil corrupti qui esse quasi delectus ratione harum ex, rerum maiores cupiditate. Inventore, unde.",
    },
  ];

  const whyChooseContent = [{}];

  return (
    <MainLayout classes={[styles.container]}>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.text}>
            <div className={styles.content}>
              <h1>Content & Media Production Excites Us.</h1>
              <div className={styles.redLine}></div>
              <p>
                We are a Team of Mediapreneurs with a knack for improving the
                Digital Content and Media ecosystem with quick turnaround time
                and quality content delivery. Content and Media play a vital
                role in brand communications and it is our obsession with the
                2Qs - Quick and Quality Content that we are proud to bring to
                the table.
              </p>
            </div>
          </div>
          <img className={styles.working} src={working} alt="Working" />
        </section>
        <section className={styles.limewit}>
          <div className={styles.contentWrapper}>
            <div className={styles.left}>
              <img src={changeByDesignImage} alt="Change by design" />
            </div>
            <div className={styles.right}>
              <h1>
                We are a part of the <span>LIMEWIT</span> Media Group
              </h1>
              <div className={styles.orangeLine}></div>
              <p>
                &quot;We add values to your brand by being a realiable partner
                for all your content production needs.&quot;
              </p>
            </div>
          </div>
          <div className={styles.gridImgContainer}>
            <img
              className={styles.grid}
              src={rhombushapedGird}
              alt="Rhombus Shaped Grid"
            />
            <img
              className={styles.grid}
              src={rhombushapedGird}
              alt="Rhombus Shaped Grid"
            />
          </div>
        </section>
        <div className={styles.blackLine}></div>

        <section className={styles.sisterOrganizations}>
          <div className={styles.yellowBackground}>
            <h1>
              Meet Our <span>Sister Organizations</span>
            </h1>
            <div className={styles.logos}>
              <img src={limewitLogo} alt="Limewit" />
              {/* <img src={limewitLogo} alt="Limewit" /> */}
            </div>
            {/* <img src={rhombushapedGird} alt="Rhombus Shaped Grid" />
            <img src={rhombushapedGird} alt="Rhombus Shaped Grid" /> */}
          </div>
        </section>
        {/* <section className={styles.videoWrapper}>
          <div className={styles.video}>
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/o2gGD4ewTNA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </section> */}
      </main>
    </MainLayout>
  );
};

export default About;
