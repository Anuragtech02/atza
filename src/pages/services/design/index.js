import { useState, useEffect } from "react";
import { Header } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import styles from "./Design.module.scss";
import uibg from "../../assets/bg/uiux-bg.jpg";
import { Grid } from "@mui/material";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

const raw = [
  {
    title: "Project 1",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com",
  },
];

const Design = () => {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectsLoadedIndex, setProjectsLoadedIndex] = useState(5); // storing index so actual count is count + 1
  const [startIndexModal, setStartIndexModal] = useState(null);

  useEffect(() => {
    let tempData = Array(20).fill(raw[0]);
    setData(tempData);
    setProjects(tempData.slice(0, 6));
  }, []);

  function handleClickMore() {
    if (projectsLoadedIndex <= data.length - 6) {
      setProjects([
        ...projects,
        ...data.slice(projectsLoadedIndex, projectsLoadedIndex + 6),
      ]);
      setProjectsLoadedIndex(projectsLoadedIndex + 6);
    } else if (projectsLoadedIndex <= data.length) {
      setProjects([
        ...projects,
        ...data.slice(projectsLoadedIndex, data.length - 1),
      ]);
      setProjectsLoadedIndex(data.length - 1);
    }
  }

  return (
    <MainLayout>
      <Header
        title="Design & UI/UX"
        bg={uibg}
        description="Better Designs are the perfect recipe to your audience's attention. We've got the best recipe with the best designers in town."
        bottomComp={
          <div className={styles.heading}>
            <span></span>
            <h3>Our Design Offerings</h3>
            <span></span>
          </div>
        }
      />
      <div className={styles.container}>
        <div className={styles.services}>
          <div className={styles.service}>
            <span className={styles.vLine}></span>
            <div>
              <h2>UI/UX</h2>
              <p>Designing</p>
            </div>
          </div>
          <div className={styles.service}>
            <span className={styles.vLine}></span>
            <div>
              <h2>Social Media</h2>
              <p>Creatives</p>
            </div>
          </div>
          <div className={styles.service}>
            <span className={styles.vLine}></span>
            <div>
              <h2>Website Banner</h2>
              <p>Designing</p>
            </div>
          </div>
        </div>
        <main>
          <div className={styles.wrapper}>
            <p>
              We&apos;ve been conceptualizing, executing Digital Branding
              Campaigns for some our promotional clients.
            </p>
            <h1>
              Let&apos;s jump on to our <span>Portfolio</span>
            </h1>
            <div className={styles.portfolio}>
              <Grid container spacing={1}>
                {projects.map((project, i) => (
                  <Grid item key={i} md={4} sm={6} xs={12}>
                    <div className={styles.project}>
                      <img src={project.image} alt={project.title} />
                      <span onClick={() => setStartIndexModal(i)}>+</span>
                    </div>
                  </Grid>
                ))}
              </Grid>
              {projects.length < data.length && (
                <p
                  style={{
                    textAlign: "right",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                  onClick={handleClickMore}
                >
                  Load More
                </p>
              )}
            </div>
          </div>
        </main>
      </div>
      {projects.length && startIndexModal !== null && (
        <div className="image-modal">
          <Lightbox
            images={projects.map((img) => img.image)}
            startIndex={startIndexModal}
            onClose={() => setStartIndexModal(null)}
          />
        </div>
      )}
    </MainLayout>
  );
};

export default Design;
