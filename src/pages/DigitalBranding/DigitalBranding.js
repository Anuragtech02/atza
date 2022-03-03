import { Header } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import styles from "./DigitalBranding.module.scss";

const DigitalBranding = () => {
  return (
    <MainLayout>
      <Header title="DigitalBranding" />
      <div className={styles.container}></div>
    </MainLayout>
  );
};

export default DigitalBranding;
