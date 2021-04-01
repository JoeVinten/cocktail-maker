import { useState } from "react";

import TextInput from "../src/components/TextInput";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../src/components/Button";
import Card from "../src/components/Card";

export default function Home() {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState(null);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData(search);
    setSearch("");
  };

  const getData = async (search) => {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`
    );
    const data = await response.json();
    const drinks = data.drinks;
    setCocktails(drinks);
  };

  return (
    <div className={styles.container}>
      <div className={styles.textArea}>
        <h1>Mix it up</h1>
        <p>
          Search for your favourite cocktails and get some quick and easy
          recipes
        </p>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="hello"
            label="Search field"
            placeholder="Search for a cocktail..."
            value={search}
            onChange={handleInput}
          />
          <Button name="Search" />
        </form>
      </div>
      <Image
        className={styles.backgroundDisplay}
        src="/../public/undraw_partying_p92d.svg"
        alt="Party illustration"
        width={500}
        height={500}
      />

      {cocktails &&
        cocktails.map((cocktail) => (
          <Card
            key={cocktail.idDrink}
            imgSrc={cocktail.strDrinkThumb}
            name={cocktail.strDrink}
            mainIngredient={cocktail.strIngredient1}
            glass={cocktail.strGlass}
          />
        ))}
    </div>
  );
}
