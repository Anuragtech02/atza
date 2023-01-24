import styles from "./About.module.scss";
import { Navbar, Footer } from "@/components";
import { IconButton } from "@mui/material";
import MainLayout from "../../layouts/MainLayout";
import { FiArrowDown } from "react-icons/fi";
import working from "@/assets/bg-home.jpg";
import changeByDesignImage from "@/assets/bg/branding-bg.jpg";
import rhombushapedGird from "@/assets/bg/portfolio-pattern.png";
import limewitLogo from "@/assets/logos/limewit-logo.png";
import logo from "@/assets/icons/phone.png";
import Image from "next/image";

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
              <h1>
                We are on a mission to create the World’s most IMPACTFUL Content
                Company.
              </h1>
              <div className={styles.redLine}></div>
              <p>
                This includes a perfect blend of high-performance teams
                delivering value to challenging mandates, and reaching out to
                millions of people through our IPs with resourceful content, in
                comprehensible ways.
              </p>
            </div>
          </div>
          <Image className={styles.working} src={working} alt="Working" />
        </section>
        <section className={styles.limewit}>
          <div className={styles.contentWrapper}>
            <div className={styles.left}>
              <Image src={changeByDesignImage} alt="Change by design" />
            </div>
            <div className={styles.right}>
              <h1>
                We love what we do at <span>ATZA</span>
              </h1>
              <div className={styles.orangeLine}></div>
              <p>
                &quot;We are passionate about each and every content piece,
                every video that comes out of our systems, and every strategy
                pitch we love to sacrifice our nights for.&quot;
              </p>
            </div>
          </div>
          <div className={styles.gridImgContainer}>
            <Image
              className={styles.grid}
              src={rhombushapedGird}
              alt="Rhombus Shaped Grid"
            />
            <Image
              className={styles.grid}
              src={rhombushapedGird}
              alt="Rhombus Shaped Grid"
            />
          </div>
        </section>
        <section className={styles.limewit}>
          <div className={styles.gridImgContainer}>
            {/* <Image
              className={styles.grid}
              src={rhombushapedGird}
              alt="Rhombus Shaped Grid"
            />
            <Image
              className={styles.grid}
              src={rhombushapedGird}
              alt="Rhombus Shaped Grid"
            /> */}
          </div>
          <div className={styles.contentWrapper}>
            <div className={styles.right}>
              {/* <h1>
                We love what we do at <span>ATZA</span>
              </h1>
              <div className={styles.orangeLine}></div> */}
              <p>
                &quot;Our team of Mediapreneurs is always up to the task,
                looking for challenging mandates to work on and exciting clients
                to deliver value to. <br />
                With such driving forces, we take pride in working with you and
                for you. &quot;
              </p>
            </div>
            <div className={styles.left}>
              <Image src={changeByDesignImage} alt="Change by design" />
            </div>
          </div>
        </section>
        <div className={styles.blackLine}></div>

        {/* <section className={styles.sisterOrganizations}>
          <div className={styles.yellowBackground}>
            <h1>
              Meet Our <span>Sister Organizations</span>
            </h1>
            <div className={styles.logos}>
              <Image src={limewitLogo} alt="Limewit" />
            </div>
          </div>
        </section> */}
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
