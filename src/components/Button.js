import React from "react";
import styles from "../../styles/Button.module.css";

const Button = (props) => {
  const handleClick = (e) => {
    props.onClick && props.onClick(e);
  };
  return (
    <button
      onClick={handleClick}
      className={props.secondary ? styles.secondary : styles.mainBtn}
    >
      {props.children}
    </button>
  );
};

export default Button;
