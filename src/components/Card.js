import React from "react";
import Button from "./Button";

const Card = ({ imgSrc, name, mainIngredient, glass }) => {
  return (
    <div>
      <img src={imgSrc} alt={name}></img>
      <div>
        <h3>{name}</h3>
        <p>{mainIngredient}</p>
        <p>{glass}</p>
      </div>
      <Button name="Method" />
    </div>
  );
};

export default Card;
