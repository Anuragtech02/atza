import clsx from "clsx";
import styles from "./Header.module.scss";

const Header = ({
  component: Component,
  title,
  description,
  bg,
  classes = [],
  bottomComp: BottomComp,
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
        {BottomComp}
      </div>
    )
  );
};

export default Header;
