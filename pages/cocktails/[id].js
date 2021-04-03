import React from "react";
import Head from "next/head";
import Image from "next/image";
import { getCocktailsById } from "../../src/helpers/api";

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
      <h1>This is a {drink.strDrink}</h1>
      <Image
        src={drink.strDrinkThumb}
        width="500"
        height="500"
        priority
        loading="eager"
      />
      <div>
        <ul>
          {drinksIngredients.map((ingredient, index) => {
            const measure = `strMeasure${index + 1}`;
            return (
              <li key={ingredient}>
                {ingredient}: {drink[measure]}
              </li>
            );
          })}
        </ul>
      </div>
      <div>{drink.strInstructions}</div>
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
