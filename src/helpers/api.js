const getCocktails = async (method, search) => {
  let lookup;
  method === "filter" ? (lookup = "i") : (lookup = "s");
  try {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${lookup}=${search}`
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

export { getCocktails, getCocktailsById };
