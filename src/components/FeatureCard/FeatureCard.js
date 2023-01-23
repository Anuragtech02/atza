// import React from 'react'
import styles from "./FeatureCard.module.scss";
import { CgArrowRight } from "react-icons/cg";

const FeatureCard = ({ title, image }) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className={styles.content}>
        <h4>
          ATAZA FOR <strong>{title}</strong>
        </h4>
        <CgArrowRight />
      </div>
    </div>
  );
};

export default FeatureCard;
