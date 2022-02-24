import styles from "./About.module.scss";
import { Navbar, Footer } from "../../components";
import { IconButton } from "@mui/material";
import { FiArrowDown } from "react-icons/fi";

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
    <>
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.text}>
            <h1>Design for good</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus ab aliquam accusamus repudiandae alias laudantium dolor
              nihil corrupti qui esse quasi delectus ratione harum ex, rerum
              maiores cupiditate. Inventore, unde.
            </p>
            <IconButton className={styles.goDownBtn}>
              <FiArrowDown />
            </IconButton>
          </div>
        </section>
        <section className={styles.mission}>
          <div className={styles.contentWrapper}>
            <div className={styles.headline}>
              <img src={""} alt="" />
              <div className={styles.quoteLong}>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Exercitationem, eveniet ex vero facilis libero odio ratione
                  saepe! Ex, reiciendis dolorem, mollitia alias voluptatem
                  voluptatibus modi, ipsa animi omnis voluptatum fugiat.
                </p>
                <span>- Lorem Ipsum</span>
              </div>
              <h1>With love and dedication.</h1>
            </div>
            <div className={styles.description}>
              {missionContent.map((item, i) => (
                <div key={item.heading} className={styles.missionItem}>
                  <div className={styles.heading}>
                    <h3>{item.heading}</h3>
                    <span className={styles.hLine}></span>
                  </div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className={styles.whyChoose}></section>
      </main>
    </>
  );
};

export default About;
