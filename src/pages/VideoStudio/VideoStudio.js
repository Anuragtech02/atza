import { Header } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import styles from "./VideoStudio.module.scss";

const VideoStudio = () => {
  return (
    <MainLayout>
      <Header title="Video Studio" />
      <div className={styles.container}></div>
    </MainLayout>
  );
};

export default VideoStudio;
