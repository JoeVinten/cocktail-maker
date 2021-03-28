import React from "react";
import styles from "../../styles/Button.module.css";

const Button = (props) => {
  return <button className={styles.mainBtn}>{props.name}</button>;
};

export default Button;
