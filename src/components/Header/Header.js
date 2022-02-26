import clsx from "clsx";
import styles from "./Header.module.scss";

const Header = ({
  component: Component,
  title,
  description,
  bg,
  classes = [],
}) => {
  return (
    Component || (
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className={clsx(styles.container, classes)}
      >
        <div className={styles.content}>
          <h1>{title}</h1>
          <span />
          <p>{description}</p>
        </div>
      </div>
    )
  );
};

export default Header;
