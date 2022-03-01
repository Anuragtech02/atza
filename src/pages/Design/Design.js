import { Header } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import styles from "./Design.module.scss";
import uibg from "../../assets/bg/uiux-bg.jpg";
import { Grid } from "@mui/material";

const Design = () => {
  const projects = [
    {
      title: "Project 1",
      image: "https://source.unsplash.com/random/800x600",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      url: "https://www.google.com",
    },
  ];

  return (
    <MainLayout>
      <Header
        title="Design & UI/UX"
        bg={uibg}
        description="Better Designs are the perfect recipe to your audience's attention. We've got the best recipe with the best designers in town."
      />
      <div className={styles.container}>
        <div className={styles.heading}>
          <h3>Our Design Offerings</h3>
          <span></span>
        </div>
        <div className={styles.services}>
          <div className={styles.service}>
            <h2>UI/UX Designing</h2>
          </div>
          <span className={styles.vLine}></span>
          <div className={styles.service}>
            <h2>Social Media Creatives</h2>
          </div>
          <span className={styles.vLine}></span>
          <div className={styles.service}>
            <h2>Website Banner Designing</h2>
          </div>
        </div>
        <main>
          <div className={styles.wrapper}>
            <p>
              We've been conceptualizing, executing Digital Branding Campaigns
              for some our promotional clients.
            </p>
            <h1>
              Let's jump on to our <span>Portfolio</span>
            </h1>
            <div className={styles.portfolio}>
              <Grid container spacing={1}>
                {Array(6)
                  .fill(projects[0])
                  .map((project, i) => (
                    <Grid item key={i} md={4} sm={6} xs={12}>
                      <div className={styles.project}>
                        <img src={project.image} alt={project.title} />
                        <span>+</span>
                      </div>
                    </Grid>
                  ))}
              </Grid>
            </div>
          </div>
        </main>
      </div>
    </MainLayout>
  );
};

export default Design;
