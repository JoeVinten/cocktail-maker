import { useState } from "react";
import Image from "next/image";

import { getCocktails } from "../src/helpers/api";

import TextInput from "../src/components/TextInput";
import styles from "../styles/Home.module.css";
import Button from "../src/components/Button";
import Card from "../src/components/Card";
import Error from "../src/components/Error";

export default function Home() {
  const [search, setSearch] = useState("");
  const [cocktails, setCocktails] = useState(null);
  const [inputSearch, setInputSearch] = useState("cocktail");
  const [errors, setErrors] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    setErrors("");
  };

  const handleSubmit = async (e) => {
    const searchBy =
      e.target.querySelector("input").name === "cocktail" ? "search" : "filter";
    await e.preventDefault();
    if (search === "") {
      setErrors("Enter an item");
    } else {
      const res = await getCocktails(searchBy, search);
      if (res === null) setErrors("Sorry that's not a cocktail we have!");
      setCocktails(res);
    }
  };

  const handleSearchSwitch = () => {
    const updateValue = inputSearch === "cocktail" ? "alcohol" : "cocktail";
    setInputSearch(updateValue);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.textArea}>
          <h1>Mix it up</h1>
          <p>
            Search for your favorite cocktails and get some quick and easy
            recipes
          </p>
          <Button secondary onClick={handleSearchSwitch}>
            Search by {inputSearch === "cocktail" ? "alcohol" : "cocktail"}
          </Button>
          <form onSubmit={handleSubmit}>
            <TextInput
              name={inputSearch}
              label="Search field"
              placeholder="Search..."
              value={search}
              onChange={handleInput}
            />
            {errors.length > 1 && <Error error={errors} />}
            <Button>Search</Button>
          </form>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src="/undraw_partying_p92d.svg"
            alt="Party and drinks"
            width={500}
            height={500}
          />
        </div>
      </div>

      {cocktails && (
        <section className={styles.cocktails}>
          {cocktails.map((cocktail) => (
            <Card
              key={cocktail.idDrink}
              id={cocktail.idDrink}
              imgSrc={cocktail.strDrinkThumb}
              name={cocktail.strDrink}
              mainIngredient={cocktail.strIngredient1}
              glass={cocktail.strGlass}
            />
          ))}
        </section>
      )}
    </>
  );
}
