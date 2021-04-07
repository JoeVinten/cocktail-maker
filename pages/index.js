import React, { useState, useEffect } from "react";
import Image from "next/image";

import { getCocktails } from "../src/helpers/api";

import TextInput from "../src/components/TextInput";
import styles from "../styles/Home.module.css";
import Button from "../src/components/Button";
import Card from "../src/components/Card";
import Error from "../src/components/Error";

export default function Home(props) {
  const [errors, setErrors] = useState("");

  const handleInput = (e) => {
    props.handleInput(e.target.value);
    setErrors("");
  };

  const handleSubmit = async (e) => {
    const searchBy =
      e.target.querySelector("input").name === "cocktail" ? "search" : "filter";
    await e.preventDefault();
    if (props.search === "") {
      setErrors("Enter an item");
    } else {
      const res = await getCocktails(searchBy, props.search);
      if (res === null) setErrors("Sorry that's not a cocktail we have!");
      props.setCocktails(res);
    }
  };

  const handleSearchSwitch = () => {
    const updateValue =
      props.inputSearch === "cocktail" ? "alcohol" : "cocktail";
    props.setInputSearch(updateValue);
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
            Search by{" "}
            {props.inputSearch === "cocktail" ? "alcohol" : "cocktail"}
          </Button>
          <form onSubmit={handleSubmit}>
            <TextInput
              name={props.inputSearch}
              label="Search field"
              placeholder="Search..."
              value={props.search}
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

      {props.cocktails && (
        <section className={styles.cocktails}>
          {props.cocktails.map((cocktail) => (
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

//
