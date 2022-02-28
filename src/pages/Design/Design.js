import { Header } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import styles from "./Design.module.scss";

const Design = () => {
  return (
    <MainLayout>
      <Header title="Design & UI/UX" />
      <div className={styles.container}></div>
    </MainLayout>
  );
};

export default Design;
