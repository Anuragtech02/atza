import { Header } from "@/components";
import MainLayout from "@/layouts/MainLayout";
import styles from "./VideoStudio.module.scss";
import bg from "@/assets/bg/video-studio-bg.jpg";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import ModalVideo from "react-modal-video";
import Image from "next/image";

const raw = [
  {
    title: "Project 1",
    image: "https://source.unsplash.com/random/800x600",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    url: "https://www.youtube.com/watch?v=ZJNMrM6cth4",
  },
];

const VideoStudio = () => {
  const [data, setData] = useState([]);
  const [projects, setProjects] = useState([]);
  const [projectsLoadedIndex, setProjectsLoadedIndex] = useState(5); // storing index so actual count is count + 1
  const [isOpen, setIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

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
        title="High Quality Video Production Service"
        description="Struggling to get your brand story out in a perfect way? You are at the most appropriate place.
        We produce viral films and video content, uniquely delivering your message"
        bg={bg}
        bottomComp={
          <div className={styles.stats}>
            <div className={styles.stat}>
              <h1>1000+</h1>
              <p>Video Delivered</p>
              <span></span>
            </div>
            <div className={styles.stat}>
              <h1>30+</h1>
              <p>SuperClients served</p>
              <span></span>
            </div>
            <div className={styles.stat}>
              <h1>1000+</h1>
              <p>Video Minutes delivered monthly</p>
              <span></span>
            </div>
          </div>
        }
      />
      <div className={styles.container}>
        <main>
          <div className={styles.wrapper}>
            <p>
              We deliver High-Quality, Tailor-made Videos for our clients across
              multiple domains.
            </p>
            <h2>
              Let&apos;s jump on to our <span>Portfolio</span>
            </h2>
            <div className={styles.projects}>
              <Grid container spacing={1}>
                {projects.map((project, i) => (
                  <Grid item key={i} md={4} sm={6} xs={12}>
                    <div className={styles.project}>
                      <img src={project.image} alt={project.title} />
                      <span
                        onClick={() => {
                          setCurrentVideo(videoIdFromUrl(project.url));
                          setIsOpen(true);
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
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId={currentVideo}
        onClose={() => setIsOpen(false)}
      />
    </MainLayout>
  );
};

export default VideoStudio;

function videoIdFromUrl(url) {
  const youtube_regex =
    /^.*(youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|\&vi?=)([^#\&\?]*).*/;
  const parsed = url.match(youtube_regex);

  if (parsed && parsed[2]) {
    return parsed[2];
  }
  return null;
}
