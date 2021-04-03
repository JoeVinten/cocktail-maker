import React from "react";
import styles from "../../styles/Error.module.css";

const Error = ({ error }) => {
  return (
    <div className={styles.container}>
      <p>{error}</p>
    </div>
  );
};

export default Error;
