import React from "react";
import Card from "../src/components/Card";

const Results = () => {
  return (
    <div>
      <h1>Hello from the cocktails page</h1>
      <Card
        imgSrc="https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg"
        name="Random drink"
        mainIngredient="Rum"
        glass="Short"
      />
    </div>
  );
};

export default Results;
