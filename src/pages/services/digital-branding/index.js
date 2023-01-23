import { Header } from "@/components";
import MainLayout from "@/layouts/MainLayout";
import styles from "./DigitalBranding.module.scss";
import bg from "@/assets/bg/branding-bg.jpg";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import stat1Img from "@/assets/branding-stat-1.jpg";
import stat2Img from "@/assets/branding-stat-2.jpg";
import Image from "next/image";

const raw = [
  {
    title: "Project 1",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.google.com",
  },
];

const DigitalBranding = () => {
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
        title="Digital Branding"
        description="To reach out to the right set of audience, you need a gorgeous stragtegy. To create a good gorgeous strategy, you need a passionate team."
        bg={bg}
        bottomComp={
          <div className={styles.stats}>
            <div
              className={styles.stat}
              // style={{ backgroundImage: `url(${stat1Img})` }}
            >
              <h1>5M+</h1>
              <p>
                <span>Impressions</span> Delivered
              </p>
            </div>
            <div
              className={styles.stat}
              // style={{ backgroundImage: `url(${stat2Img})` }}
            >
              <h1>15+</h1>
              <p>
                <span>Clients</span> Serviced
              </p>
            </div>
          </div>
        }
      />
      <div className={styles.container}>
        <main>
          <div className={styles.wrapper}>
            <p>
              We&apos;ve been conceptualizing executing Digital branding
              campaigns for some of our prominent clients.
            </p>
            <h2>
              Let&apos;s jump on to our <span>Portfolio</span>
            </h2>
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
            open={open}
            close={() => setOpen(false)}
            slides={projects.map((img) => img.image)}
            render={{
              slide: (image, offset, rect) => {
                const width = Math.round(
                  Math.min(
                    rect.width,
                    (rect.height / image.height) * image.width
                  )
                );
                const height = Math.round(
                  Math.min(
                    rect.height,
                    (rect.width / image.width) * image.height
                  )
                );

                return (
                  <div style={{ position: "relative", width, height }}>
                    <Image
                      fill
                      src={image}
                      // width={100}<
                      loading="eager"
                      placeholder="blur"
                      alt={"Hello"}
                      sizes={
                        typeof window !== "undefined"
                          ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                          : `${width}px`
                      }
                    />
                  </div>
                );
              },
            }}
          />
        </div>
      )}
    </MainLayout>
  );
};

export default DigitalBranding;
