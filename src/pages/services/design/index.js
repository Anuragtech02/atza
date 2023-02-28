import { useState, useEffect } from "react";
import { Header } from "@/components";
import MainLayout from "@/layouts/MainLayout";
import styles from "./Design.module.scss";
import uibg from "@/assets/bg/uiux-bg.jpg";
import { Grid } from "@mui/material";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Image from "next/image";
import Head from "next/head";

const raw = [
  {
    title: "Project 1",
    image: "https://ik.imagekit.io/atza/services/design/design-1.jpeg",
  },
  {
    title: "Project 2",
    image: "https://ik.imagekit.io/atza/services/design/design-2.jpg",
  },
  {
    title: "Project 3",
    image: "https://ik.imagekit.io/atza/services/design/design-3.png",
  },
  {
    title: "Project 4",
    image: "https://ik.imagekit.io/atza/services/design/design-4.jpeg",
  },
  {
    title: "Project 5",
    image: "https://ik.imagekit.io/atza/services/design/design-5.jpeg",
  },
  {
    title: "Project 6",
    image: "https://ik.imagekit.io/atza/services/design/design-6.jpg",
  },
  {
    title: "Project 7",
    image: "https://ik.imagekit.io/atza/services/design/design-7.jpg",
  },
  {
    title: "Project 8",
    image: "https://ik.imagekit.io/atza/services/design/design-8.jpg",
  },
  {
    title: "Project 9",
    image: "https://ik.imagekit.io/atza/services/design/design-9.jpg",
  },
  {
    title: "Project 10",
    image: "https://ik.imagekit.io/atza/services/design/design-10.jpeg",
  },
  {
    title: "Project 11",
    image: "https://ik.imagekit.io/atza/services/design/design-11.jpg",
  },
  {
    title: "Project 12",
    image: "https://ik.imagekit.io/atza/services/design/design-12.jpeg",
  },
  {
    title: "Project 13",
    image: "https://ik.imagekit.io/atza/services/design/design-13.jpeg",
  },
  {
    title: "Project 14",
    image: "https://ik.imagekit.io/atza/services/design/design-14.jpeg",
  },
  {
    title: "Project 15",
    image: "https://ik.imagekit.io/atza/services/design/design-15.jpeg",
  },
  {
    title: "Project 16",
    image: "https://ik.imagekit.io/atza/services/design/design-16.jpeg",
  },
  {
    title: "Project 17",
    image: "https://ik.imagekit.io/atza/services/design/design-17.jpeg",
  },
];

const Design = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectsLoadedIndex, setProjectsLoadedIndex] = useState(5); // storing index so actual count is count + 1
  const [startIndexModal, setStartIndexModal] = useState(null);

  useEffect(() => {
    let tempData = raw;
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
        ...data.slice(projectsLoadedIndex + 1, data.length - 1),
      ]);
      setProjectsLoadedIndex(data.length - 1);
    }
  }

  return (
    <MainLayout>
      <Head>
        <title>Design & UI/UX | Atza</title>
        <meta
          name="description"
          content="Better Designs are the perfect recipe to your audience's attention. We've got the best recipe with the best designers in town."
        />
      </Head>
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
                    <div
                      className={styles.project}
                      onClick={() => {
                        setStartIndexModal(i);
                        setOpen(true);
                      }}
                    >
                      <img src={project.image} alt={project.title} />
                      <span
                        onClick={() => {
                          setStartIndexModal(i);
                          setOpen(true);
                        }}
                      >
                        +
                      </span>
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
          {/* <Lightbox
          
            images={projects.map((img) => img.image)}
            startIndex={startIndexModal}
            onClose={() => setStartIndexModal(null)}
          /> */}
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
                    {/* <Image
                      fill
                      src={image}
                      loading="eager"
                      alt={"Hello"}
                      sizes={
                        typeof window !== "undefined"
                          ? `${Math.ceil((width / window.innerWidth) * 100)}vw`
                          : `${width}px`
                      }
                    /> */}
                    <img
                      src={image}
                      alt="hello"
                      style={{
                        maxWidth: "100%",
                        maxHeight: "90vh",
                      }}
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

export default Design;
