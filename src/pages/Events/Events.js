import { Header } from "../../components";
import MainLayout from "../../layouts/MainLayout";
import styles from "./Events.module.scss";

const Events = () => {
  return (
    <MainLayout>
      <Header title="Events" />
      <div className={styles.container}></div>
    </MainLayout>
  );
};

export default Events;
