import React from "react";
import Button from "./Button";
import styles from "../../styles/Card.module.css";

const Card = ({ imgSrc, name, mainIngredient, glass }) => {
  return (
    <div className={styles.cardContainer}>
      <img className={styles.thumbnail} src={imgSrc} alt={name}></img>
      <div className={styles.cardText}>
        <h3>{name}</h3>
        <p>Main ingredient: {mainIngredient}</p>
        <p>{glass}</p>
      </div>
      <div className={styles.buttonContainer}>
        <Button name="Method" />
      </div>
    </div>
  );
};

export default Card;
