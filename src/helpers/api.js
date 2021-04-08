const getCocktails = async (type, search) => {
  let lookup;
  let method;
  if (type === "cocktail") {
    lookup = "filter";
    method = "i";
  } else {
    lookup = "search";
    method = "s";
  }
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${lookup}.php?${method}=${search}`
    );
    const data = await response.json();
    const drinks = data.drinks;
    return drinks;
  } catch (err) {
    console.error(err);
  }
};

const getCocktailsById = async (id) => {
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await response.json();
    const cocktail = data.drinks;
    return cocktail;
  } catch (err) {
    console.error(err);
  }
};

const getRandom = async () => {
  try {
    const response = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const data = await response.json();
    const cocktail = data.drinks;
    return cocktail[0].idDrink;
  } catch (err) {
    console.error(err);
  }
};

export { getCocktails, getCocktailsById, getRandom };
