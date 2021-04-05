import React from "react";
import Head from "next/head";
import Image from "next/image";
import { getCocktailsById } from "../../src/helpers/api";
import Link from "next/link";

import styles from "../../styles/CocktailDetails.module.css";

export default function Cocktail({ cocktail }) {
  const drink = cocktail[0];
  console.log(cocktail[0]);
  const drinksIngredients = [];

  for (const [key, value] of Object.entries(drink)) {
    if (key.includes("strIngredient") && value !== null) {
      console.log(`${key}, ${value}`);
      drinksIngredients.push(value);
    }
  }
  return (
    <>
      <Head>
        <title>{drink.strDrink}</title>
      </Head>
      <Link href="/">Back</Link>
      <main className={styles.container}>
        <div className={styles.content}>
          <Image
            src={drink.strDrinkThumb}
            height="500"
            width="500"
            priority
            loading="eager"
          />
          <div className={styles.containerCol}>
            <div className={styles.contentText}>
              <h1>{drink.strDrink}</h1>
              <h2>Ingredients</h2>
              <ul className={styles.ingredientsList}>
                {drinksIngredients.map((ingredient, index) => {
                  const measure = `strMeasure${index + 1}`;
                  return (
                    <li key={ingredient}>
                      {ingredient}: {drink[measure]}
                    </li>
                  );
                })}
              </ul>
              <div>
                <h2>Method</h2>
                <p>{drink.strInstructions}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const cocktail = await getCocktailsById(params.id);
  return {
    props: {
      cocktail,
    },
  };
}
