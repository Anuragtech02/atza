import styles from "./ContentWriting.module.scss";
import { Header } from "@/components";
import MainLayout from "@/layouts/MainLayout";
import penBg from "@/assets/bg/pen-bg.jpg";
import { Grid } from "@mui/material";
import ideaIcon from "@/assets/icons/idea.png";
import coderIcon from "@/assets/icons/coder.png";
import timeIcon from "@/assets/icons/time.png";
import glassIcon from "@/assets/icons/glass.png";
import Image from "next/image";

const ContentWriting = () => {
  const data = [
    {
      title: "Intent",
      description:
        "We keep your targets in our hearts while collecting the data for your content. We keep them at the pedestal.",
      icon: ideaIcon,
    },
    {
      title: "Research",
      description:
        "Consider this as the collection of all the required information to create content that your audience will cherish, we take our time to pick only the information that will stick with your audience for a long time.",
      icon: glassIcon,
    },
    {
      title: "Development",
      description:
        "The amalgamation of the data and information with a seasoning of our signature style. We strive to create and develop content that will reflect your brand value and industry.",
      icon: coderIcon,
    },
    {
      title: "Last stop",
      description:
        "Before presenting the final product, we taste the content to see if the data were added to match the accuracy and have reach the specific quality. Strategizing as per your audience - Planning according to theme and niche - Creating quality content - Curating the content that will reflect your brand. This is our recipe.",
      icon: timeIcon,
    },
  ];

  return (
    <MainLayout>
      <Header
        title="Content Writing & Management"
        description="To keep your audience engaged, you need to put a right story. To create the right story, you need a passionate team."
        bg={penBg}
      />
      <section className={styles.wrapper}>
        <div className={styles.container}>
          <h3>Here&apos;s how we deliver your story.</h3>
          <div className={styles.hLine}></div>
          <div className={styles.content}>
            <Grid container>
              {data.map((item, i) => (
                <Grid item xs={12} md={12} key={i}>
                  <ContentItem
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContentWriting;

const ContentItem = ({ icon, title, description }) => {
  return (
    <div className={styles.contentItem}>
      <div className={styles.image}>
        <Image src={icon} alt={title} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};
