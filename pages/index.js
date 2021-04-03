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
  const [errors, setErrors] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
    setErrors("");
  };

  const handleSubmit = async (e) => {
    await e.preventDefault();
    if (search === "") {
      setErrors("Enter an item");
      console.log(errors);
    } else {
      const res = await getCocktails(search);
      if (res === null) setErrors("Sorry that's not a cocktail we have!");
      setCocktails(res);
      setSearch("");
    }
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
          <form onSubmit={handleSubmit}>
            <TextInput
              name="hello"
              label="Search field"
              placeholder="Search for a cocktail..."
              value={search}
              onChange={handleInput}
            />
            {errors.length > 1 && <Error error={errors} />}
            <Button name="Search" />
          </form>
        </div>

        <Image
          src="/undraw_partying_p92d.svg"
          alt="Party and drinks"
          width={500}
          height={500}
        />
      </div>

      {cocktails && (
        <section className={styles.container}>
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
